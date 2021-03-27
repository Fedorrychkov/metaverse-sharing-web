import React, { useMemo } from 'react'
import { Box, Chip, makeStyles, Typography } from '@material-ui/core'
import { IDomain } from '~/store/domains'
import { useMetamask } from '~/hooks/useMetamask'
import notAvailableIcon from '~/assets/icons/not-available.svg'
import isMineIcon from '~/assets/icons/is-mine.svg'
import { NavLink } from 'react-router-dom'

type Props = {
  domain: IDomain
}

export const Domain = ({ domain }: Props) => {
  const styles = useStyles()
  const { account } = useMetamask()
  const { categories, name, price, isAvailable, associatedHash } = domain
  const isMine = useMemo(() => associatedHash === account, [associatedHash, account])

  return (
    <NavLink className={styles.link} to={`/${name.toLowerCase()}`}>
      <Box className={styles.card} style={{ backgroundColor: isMine ? '#65bd8d' : domain.color }} mb={2}>
        <Box className={styles.cardInner}>
          <Box display="flex" justifyContent="space-between">
            <Box width="100%">
              {categories && categories.map((category) => (
                <Chip key={category} label={category} className={`${styles.category} ${isMine && styles.contained}`} variant="outlined" />
              ))}
            </Box>
            <Box color="background.default" minWidth={136} maxWidth={136}>
              <Typography className={styles.perYear}>Per year</Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box color="background.default" width="100%">
              <Typography className={`${styles.name} ${isAvailable && !isMine && styles.availableName}`}>{name}</Typography>
            </Box>
            <Box minWidth={136} maxWidth={136}>
              <Box color="background.default">
                <Typography className={styles.price}>{price}</Typography>
              </Box>
              <Box color="background.default">
                <Typography className={styles.perYear}>0.0018 BTC</Typography>
              </Box>
              <Box color="background.default">
                <Typography className={styles.perYear}>45 US$</Typography>
              </Box>
            </Box>
          </Box>
          {!isAvailable && !isMine && <Box bgcolor="background.default" className={styles.line} />}
        </Box>
        {!isAvailable && !isMine && (
          <Box className={styles.badge} color="background.default">
            <img src={notAvailableIcon} className={styles.badgeIcon} alt="Not available" />
            <Typography className={styles.badgeText}>free<br />in<br />10 mos</Typography>
          </Box>
        )}
        {isMine && (
          <Box className={styles.badge} color="background.default">
            <img src={isMineIcon} className={styles.badgeIcon} alt="Its yours" />
            <Typography className={styles.badgeText}>Yours<br />for<br />10 mos</Typography>
          </Box>
        )}
      </Box>
    </NavLink>
  )
}

const useStyles = makeStyles({
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  card: {
    backgroundColor: '#4f4f52',
    position: 'relative',
  },
  cardInner: {
    overflow: 'hidden',
    padding: '12px 32px',
    position: 'relative',
  },
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
  line: {
    position: 'absolute',
    right: '-20%',
    width: '140%',
    top: '50%',
    height: 2,
    transform: 'rotate(171.5deg)',
  },
  badge: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: -27,
    right: '20%',
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
