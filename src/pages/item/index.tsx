import { Box, Container } from '@material-ui/core'
import React, { useMemo } from 'react'
import { useLocation } from 'react-router'
import { DefaultLayout } from '~/layouts/default-layout'

const paths = [
  {
    title: 'Domains',
    url: '/',
  },
]

export const DomainPage = () => {
  const location = useLocation()
  const currentPaths = useMemo(() => [...paths, { title: location.pathname.replace('/', '') }], [location])

  return (
    <DefaultLayout hasTabs={false} hasBreadCrumbs paths={currentPaths}>
      <Container>
        <Box display="flex" justifyContent="space-between" pt={4}>
          <Box flex={1}>
          </Box>
          <Box minWidth={252} maxWidth={252} ml={5}>

          </Box>
        </Box>
      </Container>
    </DefaultLayout>
  )
}
