import React from 'react'
import { Box, Container } from '@material-ui/core'
import { DefaultLayout } from '~/layouts/default-layout'

export const ArtsPage = () => {
  return (
    <DefaultLayout currentTabIndex={1}>
      <Container>
        <Box display="flex" justifyContent="space-between" pt={2}></Box>
      </Container>
    </DefaultLayout>
  )
}
