import { useCallback, useEffect, useState } from 'react'
import { Web3Provider } from '~/services/web3'

export const useMetamask = () => {
  const [hasWeb3, setHasWeb3] = useState(false)
  const [account, setAccount] = useState('')

  useEffect(() => {
    if (Web3Provider.hasWeb3()) return setHasWeb3(true)
    setHasWeb3(false)
  }, [])

  useEffect(() => {
    const fetchAccounts = async () => {
      const account = await Web3Provider.fetchAccount()
      if (account) {
        setAccount(account)
        clearInterval(timerId)
      }
    }

    const timerId = setInterval(() => {
      fetchAccounts()
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  const handleConnectWithMetamask = useCallback(() => {
    return Web3Provider.connectWallet()
  }, [])

  const handleDisconnectFromMetamask = useCallback(async () => {
    return await Web3Provider.disconnectAccount()
  }, [])

  return {
    hasWeb3,
    account,
    handleConnectWithMetamask,
    handleDisconnectFromMetamask,
  }
}
