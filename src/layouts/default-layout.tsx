import React, { useCallback } from 'react'
import { useHistory } from 'react-router'
import { Box } from '@material-ui/core'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'
import { TabHead } from '~/components/tab-head'
import { Breadcrumbs, IBreadcrumb } from '~/components/breadcrumbs'

type Props = {
  children: React.ReactChild | React.ReactChild[]
  hasTabs?: boolean
  hasBreadCrumbs?: boolean
  invertedColors?: boolean
  currentTabIndex?: number
  paths?: IBreadcrumb[]
}

const tabs = [
  {
    type: 'domains',
    title: 'Domains',
    route: '/',
  },
  {
    type: 'art',
    title: 'Art',
    route: '/art',
  },
]

export const DefaultLayout = ({
  children,
  hasTabs = true,
  hasBreadCrumbs = false,
  invertedColors = false,
  currentTabIndex = 0,
  paths = [],
}: Props) => {
  const history = useHistory()

  const onChangeTab = useCallback((currentIndex: number) => {
    if (currentTabIndex === currentIndex) return

    const tab = tabs[currentIndex]
    history.push(tab.route)
  }, [history, currentTabIndex])

  return (
    <Box display="flex" flexDirection="column" flex={1} bgcolor="background.default">
      <Header invertedColors={invertedColors} />
      <Box component="main" flex={1}>
        {hasTabs && <TabHead tabs={tabs} currentTabIndex={currentTabIndex} onChangeTab={onChangeTab} />}
        {hasBreadCrumbs && <Breadcrumbs paths={paths} invertedColors={invertedColors} />}
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
