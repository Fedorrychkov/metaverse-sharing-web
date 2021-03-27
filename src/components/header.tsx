import React, { useEffect, useMemo } from 'react'
import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import { Web3Provider } from '~/services/web3'
import { MetamaskBtn } from './metamask-btn'
import logo from '~/assets/icons/logo.svg'
import { useSelector } from 'react-redux'
import { IStore } from '~/store/types'

export const Header = () => {
  const styles = useStyles()
  const { fetchedDomains } = useSelector((state: IStore) => state.domains)
  const domainLength = useMemo(() => fetchedDomains.length, [fetchedDomains])

  useEffect(() => {
    const getAccounts = async () => {
      console.log(await Web3Provider.fetchAccount())
    }

    getAccounts()
  }, [])

  return (
    <Box component="header" py={4}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box flex={1}>
            <img src={logo} alt='' />
            <Typography color="primary" className={styles.title}>
              #TheMetaverseFund
            </Typography>
            <Typography color="textPrimary" className={styles.subtitle}>
              {domainLength} Unstoppable Domains, available for 1y-rent
            </Typography>
          </Box>
          <Box>
            <MetamaskBtn />
            <Box textAlign="right" pt={3}>
              <Typography color="textPrimary" className={styles.counts}>
                Available: 321
              </Typography>
              <Typography color="textPrimary" className={styles.counts}>
                Locked: 400
              </Typography>
              <Box pt={1} />
              <Typography color="textPrimary" className={styles.counts}>
                1 BTC = 1 BTC
              </Typography>
              <Typography color="textPrimary" className={styles.counts}>
                1 ETH = 1 ETH
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const useStyles = makeStyles({
  title: {
    fontSize: 36,
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 400,
  },
  counts: {
    fontSize: 14,
    fontWeight: 400,
  },
})
