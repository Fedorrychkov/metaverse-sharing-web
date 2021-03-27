import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { DefaultLayout } from '~/layouts/default-layout'
import { Filter } from '~/components/filter'

export const MainPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Filter />
          </Grid>
          <Grid item xs={9}>
            is content
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  )
}