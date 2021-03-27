import React from 'react'
import { Box, Button, Container, makeStyles, Typography } from '@material-ui/core'

type ITab = {
  type: string
  title: string
}

type Props = {
  tabs: ITab[]
  currentTabIndex: number
  onChangeTab: (index: number) => void
}

export const TabHead = ({ tabs, currentTabIndex, onChangeTab }: Props) => {
  const styles = useStyles()

  return (
    <Box className={styles.container}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box flex={1} display="flex" mx="-4px" mr={1}>
            {tabs.map(({ type, title }, index) => (
              <Button key={type} className={`${styles.tab} ${index === currentTabIndex && styles.activeTab}`} onClick={() => onChangeTab(index)}>
                <Typography className={styles.title}>{title}</Typography>
              </Button>
            ))}
          </Box>
          <Box>
            <Button className={styles.btn}>
              Side with the dao →
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const useStyles = makeStyles({
  container: {
    background: 'linear-gradient(90deg, #2BB9EC 0%, #C696C6 51.04%, #EB73A8 97.4%)',
  },
  btn: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2a282e',
    border: '2px solid #2a282e',
    padding: '10px',
    maxWidth: 192,
    whiteSpace: 'nowrap',
    textOverflow: 'elipsis',
    overflow: 'hidden',
    width: '100%',
    textTransform: 'uppercase',
  },
  tab: {
    flex: 1,
    position: 'relative',
    padding: '12px 0',
    margin: '0 4px',
  },
  title: {
    width: '100%',
    textAlign: 'left',
    color: '#2a282e',
    fontSize: 20,
    fontWeight: 700,
    textTransform: 'capitalize',
  },
  activeTab: {
    '&::after': {
      content: '""',
      position: 'absolute',
      backgroundColor: '#fdff88',
      height: 8,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
})
