import React from 'react'
import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

export type IBreadcrumb = {
  title: string,
  url?: string
}

type Props = {
  paths?: IBreadcrumb[]
  invertedColors?: boolean
}

export const Breadcrumbs = ({ paths = [], invertedColors = false }: Props) => {
  const styles = useStyles()

  return (
    <Box className={`${styles.container} ${invertedColors && styles.invertedContainerBackground}`} display="flex" alignItems="center" color="background.default">
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box className={styles.content} mx="-4px">
            {paths.map((path, index) => {
              return paths.length - 1 === index ? (
                <Box key={index}>
                  <Typography className={styles.link}>{path.title}</Typography>
                </Box>
              ) : (
                <Box key={index} className={styles.content}>
                  <NavLink className={styles.link} to={path.url || '/'}><Typography className={styles.link}>{path.title}</Typography></NavLink>
                  <Typography className={styles.link}>←</Typography>
                </Box>
              )
            })}
          </Box>
          {!invertedColors && (
            <Box>
              <NavLink to="/dao" className={styles.btn}>
                <Typography>
                  Side with the dao →
                </Typography>
              </NavLink>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}

const useStyles = makeStyles({
  container: {
    background: 'linear-gradient(90deg, #2BB9EC 0%, #C696C6 51.04%, #EB73A8 97.4%)',
    padding: '2px 0',
    minHeight: 48,
  },
  invertedContainerBackground: {
    background: 'linear-gradient(90deg, #E15958 0%, #EF9052 51.04%, #E8E679 97.4%);',
  },
  btn: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2a282e',
    border: '2px solid #2a282e',
    padding: '10px',
    whiteSpace: 'nowrap',
    textOverflow: 'elipsis',
    overflow: 'hidden',
    display: 'block',
    textTransform: 'uppercase',
    textDecoration: 'none',
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
