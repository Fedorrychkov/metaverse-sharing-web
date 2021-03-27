import React, { useCallback, useMemo } from 'react'
import { Box, Button, Link, makeStyles, Tooltip, Typography } from '@material-ui/core'
import { useMetamask } from '~/hooks/useMetamask'
import { cutString } from '~/utils/cut-string'

export const MetamaskBtn = () => {
  const { hasWeb3, account = '', handleConnectWithMetamask, handleDisconnectFromMetamask } = useMetamask()
  const displayedAddress = useMemo(() => cutString(account, 12), [account])
  const styles = useStyles()

  const handleClick = useCallback(() => {
    if (!account) {
      handleConnectWithMetamask()

      return
    }

    handleDisconnectFromMetamask()
  }, [account, handleConnectWithMetamask, handleDisconnectFromMetamask])

  if (!hasWeb3) {
    return (
      <Tooltip title="Need web3 provider">
        <Link className={styles.btn} href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
          <Typography>Install MetaMask</Typography>
        </Link>
      </Tooltip>
    )
  }

  return (
    <>
      <Button className={`${styles.btn} ${styles.hasAccount}`} onClick={handleClick}>
        {account ? <AccountButton displayedAddress={displayedAddress} /> : 'Connect wallet'}
      </Button>
    </>
  )
}

export const AccountButton = ({displayedAddress }: { displayedAddress: string }) => {
  const styles = useStyles()

  return (
    <Box className={styles.account}>
      <Typography>{displayedAddress}</Typography>
    </Box>
  )
}

const useStyles = makeStyles({
  btn: {
    borderRadius: 0,
    border: '1px solid #fdff88',
    color: '#fdff88',
    padding: '14px 10px',
    maxWidth: 182,
    display: 'block',
    textAlign: 'center',

    '&:hover': {
      textDecoration: 'none',
    },
  },
  hasAccount: {
    width: '100%',
    minHeight: 60,
  },
  account: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 50,
    marginRight: 12,
  },
})
