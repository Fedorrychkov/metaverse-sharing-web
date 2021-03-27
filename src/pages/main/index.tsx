import React, { useEffect } from 'react'
import { Box, Container } from '@material-ui/core'
import { DefaultLayout } from '~/layouts/default-layout'
import { Filter } from '~/components/filter'
import { useDispatch, useSelector } from 'react-redux'
import { setDomains } from '~/store/domains'
import { IStore } from '~/store/types'
import { Domain } from '~/components/domain'

const domains = [
  {
    name: 'unstoppableDomains.crypto',
    price: 'Ξ0.045',
    isAvailable: true,
    whenAvailable: '1617161963969',
    picture: '',
    color: '#38B0E8',
    associatedHash: '1',
  },
  {
    name: 'blockchainua.crypto',
    price: 'Ξ0.045',
    isAvailable: false,
    whenAvailable: '1617161963969',
    picture: '',
    color: '#F05E2B',
    associatedHash: '0x68A133aeEb048c687c2e82cFb7ed7CFCD138591c',
  },
  {
    name: 'Metaverse.eth',
    price: 'Ξ0.045',
    isAvailable: false,
    whenAvailable: '1617161963969',
    picture: '',
    color: '#F05E2B',
    associatedHash: '1',
  },
]

export const MainPage = () => {
  const { filteredDomains } = useSelector((state: IStore) => state.domains)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDomains(domains))
  }, [dispatch])

  return (
    <DefaultLayout>
      <Container>
        <Box display="flex" justifyContent="space-between" pt={2}>
          <Box minWidth={252} maxWidth={252} mr={1}>
            <Filter />
          </Box>
          <Box flex={1}>
            {filteredDomains.map(domain => (
              <Domain domain={domain} key={domain.name} />
            ))}
          </Box>
        </Box>
      </Container>
    </DefaultLayout>
  )
}