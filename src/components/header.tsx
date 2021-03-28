import React, { useMemo } from 'react'
import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { MetamaskBtn } from './metamask-btn'
import logo from '~/assets/icons/logo.svg'
import { useSelector } from 'react-redux'
import { IStore } from '~/store/types'

export const Header = ({ invertedColors = false }: { invertedColors?: boolean }) => {
  const styles = useStyles()
  const { fetchedDomains } = useSelector((state: IStore) => state.domains)
  const domainLength = useMemo(() => fetchedDomains.length, [fetchedDomains])
  const availableDomainsLength = useMemo(() =>
    fetchedDomains.filter(domain => domain.isAvailable).length, [fetchedDomains])

  return (
    <Box component="header" py={4}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box flex={1}>
            <NavLink to="/">
              <img src={logo} alt='' />
            </NavLink>
            <Typography color="primary" className={`${styles.title} ${invertedColors && styles.invertedColorTitle}`}>
              #TheMetaverseFund
            </Typography>
            <Box>
              <Typography color="textPrimary" className={styles.subtitle}>
                {domainLength} .crypto {'&'} .zil domains for 1-year rent.
              </Typography>
              <a href="/#" className={`${styles.subtitle} ${styles.link}`}>
                <Typography>Read the lightpaper →</Typography>
              </a>
            </Box>
          </Box>
          <Box>
            <MetamaskBtn />
            <Box textAlign="right" pt={3}>
              <Typography color="textPrimary" className={styles.counts}>
                Available: {availableDomainsLength}
              </Typography>
              <Typography color="textPrimary" className={styles.counts}>
                Locked: {domainLength - availableDomainsLength}
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
    display: 'inline',
  },
  counts: {
    fontSize: 14,
    fontWeight: 400,
  },
  link: {
    color: '#fff',
    fontSize: 18,
    display: 'inline-block',
    borderBottom: '1px solid #fdff88',
    textDecoration: 'none',
    marginLeft: 4,
  },
  invertedColorTitle: {
    color: '#e94a42',
  },
})
