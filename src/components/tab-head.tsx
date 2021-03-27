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
        <Box flex={1} display="flex" mx="-4px">
          {tabs.map(({ type, title }, index) => (
            <Button key={type} className={`${styles.tab} ${index === currentTabIndex && styles.activeTab}`} onClick={() => onChangeTab(index)}>
              <Typography className={styles.title}>{title}</Typography>
            </Button>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

const useStyles = makeStyles({
  container: {
    background: 'linear-gradient(90deg, #2BB9EC 0%, #C696C6 51.04%, #EB73A8 97.4%)',
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
