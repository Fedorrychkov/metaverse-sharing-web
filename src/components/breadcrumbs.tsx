import React from 'react'
import { Box, Button, Container, makeStyles, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

export type IBreadcrumb = {
  title: string,
  url?: string
}

type Props = {
  paths?: IBreadcrumb[],
}

export const Breadcrumbs = ({ paths = [] }: Props) => {
  const styles = useStyles()

  return (
    <Box className={styles.container} color="background.default">
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box className={styles.content} mx="-4px">
            {paths.map((path, index) => {
              return paths.length - 1 === index ? (
                <>
                  <Typography className={styles.link}>{path.title}</Typography>
                </>
              ) : (
                <>
                  <NavLink className={styles.link} to={path.url || '/'}><Typography className={styles.link}>{path.title}</Typography></NavLink>
                  <Typography className={styles.link}>←</Typography>
                </>
              )
            })}
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
    padding: '2px 0',
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
  link: {
    fontSize: 20,
    fontWeight: 700,
    textDecoration: 'none',
    color: '#2a282e',
    margin: '0 4px',
    textTransform: 'capitalize',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
})
