import { Box, Button, Container,  makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router'
import { useObservable } from 'rxjs-hooks'
import { DefaultLayout } from '~/layouts/default-layout'
// import { vault } from '~/services/config'
import { Web3Provider } from '~/services/web3'

const paths = [
  {
    title: 'Home',
    url: '/',
  },
]

export const DaoPage = () => {
  const styles = useStyles()
  const location = useLocation()
  const currentPaths = useMemo(() => [...paths, { title: location.pathname.replace(/\//gi, '') }], [location])
  const [isLoading, setLoading] = useState(false)
  const [stepType, setStepType] = useState('approve')
  const [depositAmount, setDepositAmount] = useState('')
  const [withdrawAmount, setWithdrawAmount] = useState('')

  const [vaultData] = useState<any | null>(null)
  const [balance, setBalance] = useState<number>(0)

  const account = useObservable(() => Web3Provider.account)

  useEffect(() => {
    // Web3Provider.getVaultData('tusdVault').then(setVaultData)
    setBalance(account?.tusdBalance || 0)
  }, [account])

  console.info(isLoading, stepType, vaultData)

  const onApprove = useCallback((amount: number, contract = 'tusdVault') => {
    setLoading(true)
    return Web3Provider.approve(amount / 0.000000000001, contract)
      .then(() => setStepType('approved'))
      .finally(() => setLoading(false))
  }, [])


  const onDeposit = useCallback(async (amount: number) => {
    setLoading(true)

    return Web3Provider.deposit(amount / 0.000000000001, 'tusdVault')
      .then(() => Web3Provider.refresh())
      .then(() => setStepType('deposited'))
      .finally(() => setLoading(false))
  }, [])

  const onWithdraw = async (amount: number) => {
    setLoading(true)

    return Web3Provider.withdraw(amount / 0.000000000001, 'tusd')
      .then(() => Web3Provider.refresh())
      .then(() => setStepType('withdrawal'))
      .finally(() => setLoading(false))
  }

  return (
    <DefaultLayout hasTabs={false} hasBreadCrumbs paths={currentPaths} invertedColors>
      <Container>
        <Box flex={1} display="flex" color="background.default" mt={3} mx="-8px">
          <Box className={styles.card} flex={1} color="background.default" mx="8px">
            <Box className={styles.cardInner}>
              <Box display="flex" justifyContent="space-between">
                <Typography>→ Deposit</Typography>
                <Typography>
                  Available: {balance} tUSDC2
                </Typography>
              </Box>
              <Box>
                <TextField
                  value={depositAmount}
                  onChange={e => setDepositAmount(e.target.value)}
                  className={styles.input}
                />
              </Box>
              <Box display="flex" justifyContent="space-between" mt={3}>
                <Button className={styles.btn} disabled={!depositAmount || stepType !== 'approve'} onClick={() => onApprove(+depositAmount, 'tusd')}>
                  I.
                  {isLoading ? (
                    <>
                      {stepType === 'approved' ? 'Approved' : 'Approving'}
                    </>
                  ) : (
                    <>
                      {stepType !== 'approve' ? 'Approved' : 'Approve'}
                    </>
                  )}
                </Button>
                <Button className={styles.btn} disabled={stepType === 'deposited' || stepType !== 'approved'} onClick={() => onDeposit(+depositAmount)}>
                  II.
                  {isLoading ? (
                    <>
                      {stepType === 'deposited' ? 'Deposited' : 'Progress...'}
                    </>
                  ) : (
                    <>
                      {stepType === 'deposited' ? 'Deposited' : 'Deposite'}
                    </>
                  )}
                </Button>
              </Box>
            </Box>
          </Box>


          <Box className={styles.card} flex={1} color="background.default" mx="8px">
            <Box className={styles.cardInner}>
              <Box display="flex" justifyContent="space-between">
                <Typography>← Withdraw</Typography>
                <Typography>
                    Available: 0 tUSDC2
                </Typography>
              </Box>
              <Box>
                <TextField
                  value={withdrawAmount}
                  className={styles.input}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
              </Box>
              <Box display="flex" justifyContent="space-between" mt={3}>
                <Button className={styles.btn} onClick={() => onApprove(+withdrawAmount, 'tusd')}>
                  I. Approve
                </Button>
                <Button className={styles.btn} onClick={() => onWithdraw(+withdrawAmount)}>
                  II. deposit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" color="background.default" mt={3} mx="-8px">
          <Box flex={1} display="flex" justifyContent="space-between" mx="8px">
            <Box>
              <Typography color="textPrimary">
                Total earnings:
              </Typography>
              <Typography color="textPrimary">
                0 tUSDC2
              </Typography>
            </Box>
            <Box>
              <Typography color="textPrimary">
                Deposits:
              </Typography>
              <Typography color="textPrimary">
                0 tUSDC2
              </Typography>
            </Box>
          </Box>

          <Box flex={1} display="flex" justifyContent="space-between" mx="8px">
            <Box>
              <Typography color="textPrimary">
                Withdrawals:
              </Typography>
              <Typography color="textPrimary">
                0 tUSDC2
              </Typography>
            </Box>
            <Box>
              <Typography color="textPrimary">
                Balance:
              </Typography>
              <Typography color="textPrimary">
                {balance} tUSDC2
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </DefaultLayout>
  )
}

const useStyles = makeStyles({
  card: {
    backgroundColor: '#fff',
    padding: 3,
  },
  cardInner: {
    border: '2px solid #2a282e',
    padding: 20,
  },
  input: {
    width: '100%',

    '& .MuiInputBase-root': {
      color: '#2a282e',
      borderBottom: '2px solid #2a282e',

      '&.Mui-focused': {
        border: 0,
      },
    },
    '& .MuiInput-underline:after': {
      border: '2px solid #38b0e8',
    },
  },
  btn: {
    color: '#2a282e',
    backgroundColor: 'transparent',
    border: '2px solid #2a282e',

    '&:hover': {
      backgroundColor: '#2a282e',
      color: '#fff',
    },

    '&.MuiButton-root.Mui-disabled': {
      color: '#2a282e',
      opacity: 0.5,
    },
  },
})
