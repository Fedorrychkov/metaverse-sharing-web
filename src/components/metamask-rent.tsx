import { Box, Button, Link, makeStyles, TextField, Tooltip, Typography } from '@material-ui/core'
import React, { useCallback, useMemo, useState } from 'react'
import metamaskFoxIcon from '~/assets/icons/metamask-fox.svg'
import checkIcon from '~/assets/icons/check.svg'
import validMineIcon from '~/assets/icons/validmine.svg'
import { useMetamask } from '~/hooks/useMetamask'
import { cutString } from '~/utils/cut-string'
import { IDomain } from '~/store/domains'
import { useHistory } from 'react-router'

export const MetamaskRent = ({ domain }: { domain: IDomain}) => {
  const styles = useStyles()
  const history = useHistory()
  const [hovered, setIsHover] = useState(false)
  const [isRentWay, setRent] = useState(false)
  const [isPurchaseWay, setPurchase] = useState(false)
  const [hash, setHash] = useState('')


  const { hasWeb3, account = '', handleConnectWithMetamask } = useMetamask()
  const displayedAddress = useMemo(() => cutString(account, 12), [account])
  const isMine = useMemo(() => domain.associatedHash === account, [domain, account])


  const handleConnect = useCallback(() => {
    if (!account) {
      handleConnectWithMetamask()

      return
    }
  }, [account, handleConnectWithMetamask])

  const onRent = useCallback(() => {
    setRent(true)
    setIsHover(false)

    if (account && hasWeb3) {
      setPurchase(true)
    }
  }, [account, hasWeb3])

  const onBack = useCallback(() => {
    setPurchase(false)
    setRent(false)
    setHash('')
  }, [])

  const isValidHash = useMemo<boolean>(() => hash.length === 46 && hash.substr(0, 2) === 'Qm', [hash])

  if (isMine) {
    return (
      <Box component="aside" color="background.default" className={`${styles.card} ${styles.validForm}`}>
        <Box className={styles.cardInner} display="flex" flexDirection="column">
          <Box flex={1} color="background.default" display="flex" flexDirection="column" justifyContent="center">
            <Box pb={3} display="flex" justifyContent="center">
              <img src={validMineIcon} alt=" " />
            </Box>
            <Typography className={styles.secured} align="center">Yay!<br />Secured!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button className={styles.btn} onClick={() => history.push('/')}>
              PICK ONE MORE
            </Button>
          </Box>
        </Box>
      </Box>
    )
  } else {
    return (
      <Box component="aside" color="background.default" className={`${styles.card} ${hovered && styles.cardHovered} ${isValidHash && styles.validForm}`}>
        <Box className={styles.cardInner} display="flex" flexDirection="column">
          {!isRentWay && <Typography className={styles.title} align="center">Rent this domain</Typography>}
          {(isRentWay || isPurchaseWay) && (
            <Box position="relative">
              <Button
                variant="text"
                className={styles.title}
                onClick={onBack}
              >← BACK</Button>
              {isValidHash && <img src={checkIcon} className={styles.check} alt="check" />}
            </Box>
          )}
          {!isPurchaseWay && (
            <Box className={`${styles.foxCard} ${isRentWay && styles.foxCardShowed}`}>
              <img
                src={metamaskFoxIcon}
                className={`${styles.fox} ${!isRentWay && hovered && styles.foxHovered} ${isRentWay && styles.foxShowed}`}
                alt="Metamask Fox"
              />
            </Box>
          )}
          {isPurchaseWay && (
            <Box flex={1} display="flex" flexDirection="column" justifyContent="space-between">
              <Typography className={styles.title} align="left">Hash of your site on IPFS</Typography>
              <Box>
                <TextField
                  className={styles.input}
                  rowsMax={6}
                  value={hash}
                  onChange={(e) => setHash(e.target.value)}
                  multiline
                />
              </Box>
            </Box>
          )}
          <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
            {!isRentWay && !isPurchaseWay && (
              <Button
                variant="outlined"
                className={styles.btn}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={onRent}
              >
                Rent!
              </Button>
            )}
            {isRentWay && !isPurchaseWay && (
              <>
                {!hasWeb3 ? (
                  <Tooltip title="Need web3 provider">
                    <Link className={styles.btn} href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
                      <Typography>Install MetaMask</Typography>
                    </Link>
                  </Tooltip>
                ) : (
                  <Button className={styles.btn} onClick={handleConnect}>
                    {account ? (
                      <Box display="flex" justifyContent="center" alignItems="center">
                        <Typography>{displayedAddress}</Typography>
                      </Box>
                    ) : 'Connect wallet'}
                  </Button>
                )}
              </>
            )}
            {isPurchaseWay && (
              <Button className={styles.btn} disabled={!isValidHash}>
                PAY Ξ0.045
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    )
  }
}

const useStyles = makeStyles({
  fox: {
    width: 184,
    height: 184,
    transform: 'translateY(70%)',
    transition: '0.15s ease-out',
  },
  foxHovered: {
    transform: 'translateY(35%)',
  },
  foxShowed: {
    transform: 'translateY(0)',
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    color: '#2a282e',
    padding: 0,
  },
  secured: {
    fontSize: 24,
    fontWeight: 700,
  },
  card: {
    backgroundColor: '#fff',
    padding: 3,
    minHeight: 320,
    display: 'flex',
  },
  cardHovered: {
    backgroundColor: '#f05e2b',
  },
  validForm: {
    backgroundColor: '#5abe96',
  },
  cardInner: {
    flex: 1,
    border: '2px solid #2a282e',
    padding: 20,
  },
  foxCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderBottom: '2px solid #2a282e',
  },
  foxCardShowed: {
    border: 0,
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
  input: {
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
  check: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
})
