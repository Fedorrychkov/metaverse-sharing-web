
export const stakingAbi = [
  'function getUserData(address) view returns (uint, uint, uint, uint)',
  'function getCurrentAPY() view returns (uint)',
  'function totalValueLocked() view returns (uint)',

  'event Deposit(address indexed sender, uint amount)',
  'event Withdraw(address indexed sender, uint amount)',

  'function withdraw(uint amount)',
  'function deposit(uint amount)',
]

export const daiAbi = [
  // Some details about the token
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function allowance(address owner, address spender) view returns (uint)',

  // Get the account balance
  'function balanceOf(address) view returns (uint)',
  'function vestedAmount(address) view returns (uint)',

  // Send some of your tokens to someone else
  'function transfer(address to, uint amount)',

  // An event triggered whenever anyone transfers to someone else
  'event Transfer(address indexed from, address indexed to, uint amount)',
  // An event triggered whenever anyone make approve
  'event Approval(address indexed owner, address indexed spender, uint amount)',

  'function approve(address to, uint amount)',
]

export const vaultAbi = [
  // (totalCap, totalSupply)
  'function getTotalValueLocked() view returns (uint, uint)',
  // (totalDeposited, totalWithdrawn, liquidity)
  'function getUserData(address) view returns (uint, uint, uint)',

  'function plt() view returns (address)',

  'function withdraw(uint amount)',
  'function withdrawETH(uint amount)',
  'function deposit(uint amount)',


  'event Deposit(address indexed who, uint amount)',
  'event Withdraw(address indexed who, uint amount)',
]

export const contracts = {
  token: {
    address: '0x523a7fe78f3b11eff51441e3fcc95cb94a37d25c',
    abi: daiAbi,
  },
  tusd: {
    address: '0xf37350Aa68cC03a72052E912d71D0CbD7b343311',
    abi: daiAbi,
  },
  tusdVault: {
    address: '0x79EC44666317702AC37A57ae62254E7C3bEEbca1',
    abi: vaultAbi,
  },
  stacking: {
    address: '0x523a7fe78f3b11eff51441e3fcc95cb94a37d25c',
    abi: stakingAbi,
  },
}

export const vault = {
  name: 'tUSD Staking Vault',
  symbol: 'tUSD',
  color: 'red',
  deposited: 0,
  amount: 0,
  profit: 0,
  earned: 0,
  currentAPY: 0,
  vaultContract: 'tusdVault',
  shouldApproveDeposit: true,
  shouldApproveWithdraw: false,
}
