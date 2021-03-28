import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { Box, Chip, Container, makeStyles, Typography } from '@material-ui/core'
import isMineIcon from '~/assets/icons/is-mine.svg'
import { DefaultLayout } from '~/layouts/default-layout'
import { IDomain, setDomains } from '~/store/domains'
import { IStore } from '~/store/types'
import { MetamaskRent } from '~/components/metamask-rent'
import { useMetamask } from '~/hooks/useMetamask'

const paths = [
  {
    title: 'Domains',
    url: '/',
  },
]

const domains = [
  {
    name: 'unstoppableDomains.crypto',
    price: 'Ξ0.045',
    isAvailable: true,
    whenAvailable: '1617161963969',
    picture: '',
    color: '#38B0E8',
    associatedHash: '1',
  },
  {
    name: 'blockchainua.crypto',
    price: 'Ξ0.045',
    isAvailable: false,
    whenAvailable: '1617161963969',
    picture: '',
    color: '#F05E2B',
    associatedHash: '0x68A133aeEb048c687c2e82cFb7ed7CFCD138591c',
  },
  {
    name: 'Metaverse.eth',
    price: 'Ξ0.045',
    isAvailable: false,
    whenAvailable: '1617161963969',
    picture: '',
    color: '#F05E2B',
    associatedHash: '1',
  },
]

export const DomainPage = () => {
  const { account } = useMetamask()
  const styles = useStyles()
  const location = useLocation()
  const currentPaths = useMemo(() => [...paths, { title: location.pathname.replace(/\//gi, '') }], [location])

  const { fetchedDomains } = useSelector((state: IStore) => state.domains)
  const dispatch = useDispatch()

  useEffect(() => {
    !fetchedDomains.length && dispatch(setDomains(domains))
  }, [dispatch, fetchedDomains])


  const domain = useMemo<IDomain | undefined>(
    () => fetchedDomains.find(
      domain => domain.name.toLowerCase() === currentPaths[currentPaths.length - 1].title.toLowerCase(),
    ),
    [fetchedDomains, currentPaths],
  )

  const isMine = useMemo(() => domain && domain.associatedHash === account, [domain, account])

  return (
    <DefaultLayout hasTabs={false} hasBreadCrumbs paths={currentPaths}>
      <Container>
        <Box display="flex" justifyContent="space-between" pt={4}>
          <Box flex={1} display="flex" flexDirection="column" justifyContent="space-between">
            { domain ? (
              <Box flex={1}>
                <Box display="flex" justifyContent="space-between">
                  <Box width="100%">
                    {domain.categories && domain.categories.map((category: string) => (
                      <Chip key={category} label={category} className={styles.category} variant="outlined" />
                    ))}
                  </Box>
                  <Box minWidth={136} maxWidth={136}>
                    <Typography className={styles.perYear} color="textPrimary">Per year</Typography>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box width="100%">
                    <Typography className={`${styles.name} ${styles.availableName}`} color="textPrimary">{domain.name}</Typography>
                  </Box>
                  <Box minWidth={136} maxWidth={136}>
                    <Box>
                      <Typography className={styles.price} color="textPrimary">{domain.price}</Typography>
                    </Box>
                    <Box>
                      <Typography className={styles.perYear} color="textPrimary">0.0018 BTC</Typography>
                    </Box>
                    <Box>
                      <Typography className={styles.perYear} color="textPrimary">45 US$</Typography>
                    </Box>
                  </Box>
                </Box>
                {isMine && (
                  <Box className={styles.badge} color="background.default">
                    <img src={isMineIcon} className={styles.badgeIcon} alt="Its yours" />
                    <Typography className={styles.badgeText}>Yours<br />for<br />10 mos</Typography>
                  </Box>
                )}
              </Box>
            ) : null}
            <Box>
              <Typography color="textPrimary" style={{ fontSize: 12 }}>
                There’ll be terms and somehting else. A really small piece of text for the first iteration,
                just for the  sake of the layout.
              </Typography>
            </Box>
          </Box>
          <Box minWidth={232} maxWidth={232} ml={5}>
            {domain && <MetamaskRent domain={domain} />}
          </Box>
        </Box>
      </Container>
    </DefaultLayout>
  )
}

const useStyles = makeStyles({
  category: {
    color: '#2a282e',
    borderWidth: 2,
    borderColor: '#fdff88',
    backgroundColor: '#fdff88',
    fontSize: 14,
    fontWeight: 500,
    padding: '12px 8px',
    margin: '0 8px 8px 0',
  },
  contained: {
    backgroundColor: 'transparent',
    borderColor: '#2a282e',
  },
  perYear: {
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'right',
  },
  name: {
    fontSize: 36,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  availableName: {
    borderBottom: '4px solid #fdff88',
    display: 'inline-block',
  },
  price: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: 'right',
  },
  badge: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 136,
    height: 136,
  },
  badgeIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: 700,
    position: 'relative',
    zIndex: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
})
