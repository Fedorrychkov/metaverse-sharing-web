import { ethers } from 'ethers'
import { BehaviorSubject } from 'rxjs'
import { contracts, daiAbi, vault } from './config'
export interface Account {
  address: string;
  ethBalance: number;
  tusdBalance: number;
  tokenBalance: number;
}

const defaultAccount: Account = {
  address: '',
  ethBalance: 0,
  tusdBalance: 0,
  tokenBalance: 0,
}

class Provider {
  private ethereum = (window as any).ethereum
  private accountAddress: string = ''
  private provider: ethers.providers.Web3Provider | null = null
  public signer: ethers.providers.JsonRpcSigner | null = null
  public contract: { [key: string]: ethers.Contract } = {}
  public readonly account: BehaviorSubject<Account> = new BehaviorSubject(defaultAccount)
  // [eth, usdt]
  public readonly prices: BehaviorSubject<number[]> = new BehaviorSubject([0, 0, 0])
  // [stakedBlock, current, deposited, withdraw]
  public readonly userData: BehaviorSubject<number[]> = new BehaviorSubject([0, 0, 0, 0])

  // private web3: any
  // private account = null
  public networkType: string = ''

  constructor() {
    this.init()
  }

  init = async () => {
    this.getRates()
    if (!this.hasWeb3()) return
    this.provider = new ethers.providers.Web3Provider((window as any).ethereum)
    this.signer = this.provider.getSigner()
    this.connectContracts()
    this.getRates()

    this.ethereum.on('accountsChanged', (accounts: any[]) => {
      this.account.next({ ...defaultAccount, address: accounts[0] || '' })
      this.updateBalances()
      this.getRates()
    })

    this.account.subscribe((account) => {
      if (!account?.address) return

      // A filter for when a specific address receives tokens
      const filter = this.contract['token'].filters.Transfer(null, account.address)
      this.contract['token'].on(filter, () => {
        this.updateBalances()
        this.getRates()
      })
    })

    return true

    // await this.prepareWeb3()
    // await this.fetchNetworkName()
  }

  isMetaMaskInstalled = () => {
    return Boolean((window as any).ethereum && (window as any).ethereum.isMetaMask)
  }

  connectContracts = () => {
    if (!this.provider || !this.signer) return

    for (const [key, value] of Object.entries(contracts)) {
      this.contract[key] = new ethers.Contract(value.address, value.abi, this.signer)
    }
  }

  public connectWallet = async () => {
    if (!this.hasWeb3()) return

    try {
      const accounts = await this.ethereum.request({ method: 'eth_requestAccounts' })
      const nextAccount = { ...defaultAccount, address: accounts[0] || '' }

      this.accountAddress = accounts[0] || ''
      this.account.next(nextAccount)
      this.updateBalances(nextAccount)
    } catch (error) {
      this.handleError(error)
    }

    return this.accountAddress
  }

  public refresh = () => {
    this.updateBalances()
    this.getRates()
  }

  private getRates = () => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether%2Cethereum%2Cbitcoin&vs_currencies=usd')
      .then(response => response.json())
      .then(data => {
        this.prices.next([data.ethereum.usd, data.tether.usd, data.bitcoin.usd])
      })
  }

  // addListeners = () => {
  //   window.ethereum.on('disconnect', (error: any) => {
  //     console.log(error, 'disconnect error')
  //   })

  //   window.ethereum.on('connect', (error: any) => {
  //     console.log(error, 'connect error')
  //   })
  // }

  // public getTUSDVaultData = async (contractName = 'stacking'): Promise<any | null> => {
  //   if (!this.contract[contractName]) return null

  //   const [stakedBlock, currentAmount, depositedAmount, withdrawAmount] = await this.getUserData()
  //   const currentBlock = await this.getCurrentBlock()
  //   const currentAPY = await this.getCurrentAPY()
  //   const totalLockedRaw = await this.contract[contractName].totalValueLocked()
  //   const totalLocked = parseFloat(ethers.utils.formatEther(totalLockedRaw))

  //   const deposited = currentAmount
  //   const current = currentAmount * (1 + (currentBlock - stakedBlock) * currentAPY / 225405000)
  //   const profit = (currentBlock - stakedBlock) * currentAmount * currentAPY / 225405000
  //   const ernings = profit
  //   const vaultBalance = 0
  //   const liquidity = currentAmount + profit

  //   const withdrawn = withdrawAmount
  //   const depositedTotal = depositedAmount

  //   const liquidityPrice = 0

  //   return {
  //     profit,
  //     liquidity,
  //     deposited,
  //     liquidityPrice,
  //     withdrawn,
  //     current,
  //     ernings,
  //     vaultBalance,
  //     currentAPY,
  //     totalLocked,
  //     depositedTotal,
  //   }
  // }

  public async getVaultData(contractName: string, formatUnit = 'ether'): Promise<any | null> {
    const accountAddress = this.account.getValue().address

    if (!contractName || !this.contract[contractName] || !accountAddress) return null

    let totalDeposited
    let totalWithdrawn
    let liquidityRaw
    let totalCap
    let totalSupply

    try {
      const [
        deposited,
        withdrawn,
        liquidity,
      ] = await this.contract[contractName].getUserData(accountAddress)
      totalDeposited = deposited || 0
      totalWithdrawn = withdrawn
      liquidityRaw = liquidity
      const [cap, supply] = await this.contract[contractName].getTotalValueLocked()
      totalCap = cap
      totalSupply = supply
    } catch (ex) {
      console.log(ex, 'EX')
    }

    const deposited = parseFloat(ethers.utils.formatUnits(totalDeposited, formatUnit))
    const withdrawn = parseFloat(ethers.utils.formatUnits(totalWithdrawn, formatUnit))
    const liquidityAmount = parseFloat(ethers.utils.formatUnits(liquidityRaw, formatUnit))
    const totalCapAmount = parseFloat(ethers.utils.formatUnits(totalCap, formatUnit))
    const totalSupplyAmount = parseFloat(ethers.utils.formatUnits(totalSupply, formatUnit))

    const total = totalSupplyAmount
      ? liquidityAmount * totalCapAmount / totalSupplyAmount
      : 0

    const profit = total - deposited + withdrawn
    const ernings = (withdrawn - deposited) + liquidityAmount * totalCapAmount / totalSupplyAmount
    const vaultBalance = liquidityAmount * totalCapAmount / totalSupplyAmount
    const current = deposited - withdrawn
    const liquidity = liquidityAmount
    const currentAPY = vault.currentAPY || 0

    const totalLocked = totalCapAmount
    const depositedTotal = deposited
    const liquidityPrice = totalCapAmount / totalSupplyAmount

    return {
      profit,
      liquidity,
      deposited,
      liquidityPrice,
      withdrawn,
      current,
      ernings,
      vaultBalance,
      currentAPY,
      totalLocked,
      depositedTotal,
    }
  }

  public async getCurrentBlock(): Promise<number> {
    return this.provider ? await this.provider?.getBlockNumber() : 0
  }

  public async getCurrentAPY(contractName = 'stacking'): Promise<number> {
    if (!this.contract[contractName]) return 0

    try {
      const currentAPY = await this.contract[contractName].getCurrentAPY()
      return currentAPY.toNumber()
    } catch (error) {
      this.handleError(error)
    }

    return 0
  }


  public async approve(amount: number, contract: string) {
    if (!this.signer) throw Error('No signer')

    const spendingToken = contract !== 'tusd'
      ? await this.contract[contract].plt()
      : this.contract['tusd'].address

    const liquidityContract = new ethers.Contract(spendingToken, daiAbi, this.signer)
    const units = contract === ('tusd' || 'tusdVault') ? 'mwei' : 'ether'
    const v = ethers.utils.parseUnits(amount.toString(), units)

    const spender = (contract === 'tusd') ? this.contract['tusdVault'].address : this.contract[contract].address

    const tx = await liquidityContract.approve(spender, v)
    console.log('liquidityContract tx: ', tx)
    await this.signer.provider.waitForTransaction(tx.hash)
  }


  public async deposit(amount: number, contract: string) {
    const units = contract === 'tusd' || 'tusdVault' ? 'mwei' : 'ether'
    const v = ethers.utils.parseUnits(amount.toString(), units)
    const tx = contract === 'tusd' || 'tusdVault'
      ? await this.contract[contract].deposit(v)
      : await this.signer?.sendTransaction({ to: this.contract[contract].address, value: v })

    console.log('deposit tx: ', tx)
    tx && await this.provider?.waitForTransaction(tx.hash)
  }

  public async withdraw(amount: number, contract: string) {
    const units = contract === 'tusdVault' ? 'mwei' : 'ether'
    const v = ethers.utils.parseUnits(amount.toString(), units)
    console.log(units, v.toNumber(), this.contract[contract])

    const tx = await (contract === 'tusdVault'
      ? this.contract[contract].withdraw(v)
      : this.contract[contract].withdrawETH(v))

    console.log('tx: ', tx)
    tx && await this.provider?.waitForTransaction(tx.hash)
  }

  private updateBalances(nextAccount?: Account) {
    const account = nextAccount || this.account.getValue()
    if (!account.address) return

    this.getEthBalance(account.address)
      .then(ethBalance => {
        const account = this.account.getValue()
        this.account.next({ ...account, ethBalance })
      })

    this.getTUSDBalance(account.address)
      .then(tusdBalance => {
        const account = this.account.getValue()
        this.account.next({ ...account, tusdBalance: tusdBalance ? tusdBalance / 1000000000000 : tusdBalance })
      })

    // this.getUserData()
    //   .then(r => {
    //     this.userData.next(r)
    //   })
  }

  getEthBalance = async (accountAddress: string) =>{
    if (!this.provider || !accountAddress) return 0

    const result = await this.provider.getBalance(accountAddress)
    const formated = ethers.utils.formatEther(result)

    return parseFloat(formated)
  }

  getTUSDBalance = async (accountAddress: string) => {
    if (!this.contract['tusd'] || !accountAddress) return 0

    const result = await this.contract['tusd'].balanceOf(accountAddress)
    const formated = ethers.utils.formatUnits(result, 'mwei')

    return parseFloat(formated)
  }

  getUserData = async () => {
    return
    // if (!this.contract['stacking'] || !this.accountAddress) return [0, 0, 0, 0]

    // const [stacked, current, deposited, withdraw] = await this.contract['stacking'].getUserData(this.accountAddress)
    // const currentAmount = parseFloat(ethers.utils.formatEther(current))
    // const stakedBlock = parseFloat(stacked.toNumber())
    // const depositedAmount = parseFloat(ethers.utils.formatEther(deposited))
    // const withdrawAmount = parseFloat(ethers.utils.formatEther(withdraw))

    // return [stakedBlock, currentAmount, depositedAmount, withdrawAmount]
  }

  // ERRORS handling

  private handleError(error: any) {
    console.debug(error)
  }

  // connectWithMetamask = () => {
  //   if (!this.ethEnabled()) {
  //     throw Error('Please install MetaMask to use this dApp!')
  //   }
  // }

  disconnectAccount = async () => {
    await this.ethereum.request({
      method: 'eth_requestAccounts',
      params: [
        {
          eth_accounts: {},
        },
      ],
    })
  }

  // ethEnabled = () => {
  //   if (window.ethereum) {
  //     window.ethereum.enable()

  //     return true
  //   }

  //   return false
  // }

  // fetchNetworkName = async () => {
  //   this.networkType = await this.provider && this.provider.eth.net.getNetworkType()
  //   return this.networkType
  // }

  fetchAccount = async () => {
    // const accounts = this.web3 && await this.web3.eth.getAccounts()

    // if (accounts && accounts.length) {
    //   this.account = accounts[0]

    //   return this.account
    // }

    // return null
    return await this.connectWallet()
  }

  hasWeb3 = () => !!this.provider || !!window.web3 || !!window.ethereum

  // getAccoount = () => this.account
  // getNetworkName = () => this.networkType
  // isMainNetwork = () => this.networkType === 'main'

  // prepareWeb3 = async () => {
  //   if (!window.ethereum) {
  //     console.error('Need web3 provider in window')

  //     return
  //   }

  //   this.web3 = new Web3(window.ethereum || Web3.givenProvider)
  //   this.signer = this.web3.getSigner()

  //   this.addListeners()

  //   return this.web3
  // }
}

export const Web3Provider = new Provider()
