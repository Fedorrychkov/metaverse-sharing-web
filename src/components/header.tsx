import React, { useMemo } from 'react'
import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { MetamaskBtn } from './metamask-btn'
import logo from '~/assets/icons/logo.svg'
import { useSelector } from 'react-redux'
import { IStore } from '~/store/types'
import { useObservable } from 'rxjs-hooks'
import { Web3Provider } from '~/services/web3'

export const Header = ({ invertedColors = false }: { invertedColors?: boolean }) => {
  const styles = useStyles()
  const { fetchedDomains } = useSelector((state: IStore) => state.domains)
  const domainLength = useMemo(() => fetchedDomains.length, [fetchedDomains])
  const availableDomainsLength = useMemo(() =>
    fetchedDomains.filter(domain => domain.isAvailable).length, [fetchedDomains])
  const rates = useObservable(() => Web3Provider.prices)

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
              <a
                href="https://readymag.com/valeriiapanina/hackathon/"
                target="_blank"
                rel="noreferrer"
                className={`${styles.subtitle} ${styles.link}`}
              >
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
                1 BTC = {rates && rates[2]} USD
              </Typography>
              <Typography color="textPrimary" className={styles.counts}>
                1 ETH = {rates && rates[0]} USD
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
