import Web3 from 'web3'

class Provider {
  private web3: any
  private account = null
  public networkType: string = ''

  constructor() {
    this.init()
  }

  init = async () => {
    await this.prepareWeb3()
    await this.fetchNetworkName()
  }

  addListeners = () => {
    window.ethereum.on('disconnect', (error: any) => {
      console.log(error, 'disconnect error')
    })

    window.ethereum.on('connect', (error: any) => {
      console.log(error, 'connect error')
    })
  }

  connectWithMetamask = () => {
    if (!this.ethEnabled()) {
      throw Error('Please install MetaMask to use this dApp!')
    }
  }

  disconnectAccount = async () => {
    await window.ethereum.request({
      method: 'eth_requestAccounts',
      params: [
        {
          eth_accounts: {},
        },
      ],
    })

    this.account = null
  }

  ethEnabled = () => {
    if (window.ethereum) {
      window.ethereum.enable()

      return true
    }

    return false
  }

  fetchNetworkName = async () => {
    this.networkType = await this.web3 && this.web3.eth.net.getNetworkType()
    return this.networkType
  }

  fetchAccount = async () => {
    const accounts = this.web3 && await this.web3.eth.getAccounts()

    if (accounts && accounts.length) {
      this.account = accounts[0]

      return this.account
    }

    return null
  }

  hasWeb3 = () => !!this.web3 || !!window.web3 || !!window.ethereum

  getAccoount = () => this.account
  getNetworkName = () => this.networkType
  isMainNetwork = () => this.networkType === 'main'

  prepareWeb3 = async () => {
    if (!window.ethereum) {
      console.error('Need web3 provider in window')

      return
    }

    this.web3 = new Web3(window.ethereum || Web3.givenProvider)

    this.addListeners()

    return this.web3
  }
}

export const Web3Provider = new Provider()
