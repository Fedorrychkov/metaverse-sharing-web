import React, { useMemo } from 'react'
import { useLocation } from 'react-router'
import { DefaultLayout } from '~/layouts/default-layout'

const paths = [
  {
    title: 'Home',
    url: '/',
  },
]

export const DaoPage = () => {
  const location = useLocation()
  const currentPaths = useMemo(() => [...paths, { title: location.pathname.replace(/\//gi, '') }], [location])
  return (
    <DefaultLayout hasTabs={false} hasBreadCrumbs paths={currentPaths} invertedColors>
    </DefaultLayout>
  )
}
