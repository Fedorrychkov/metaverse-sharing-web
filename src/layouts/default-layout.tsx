import React from 'react'
import { Box } from '@material-ui/core'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'

type Props = {
  children: React.ReactChild | React.ReactChild[]
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <Box display="flex" flexDirection="column" flex={1} bgcolor="background.default">
      <Header />
      <Box component="main" flex={1}>
        {
          Array.isArray(children) ?
            (
              React.Children.map(children, ( child ) => <>{child}</>)
            ) :
            children
        }
      </Box>
      <Footer />
    </Box>
  )
}
