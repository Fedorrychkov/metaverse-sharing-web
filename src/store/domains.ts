import { createSlice } from '@reduxjs/toolkit'
import { domainsWithCategories } from './mock-domains'

export type IDomain = {
  name: string
  categories?: string[]
  price: number
  isAvailable?: boolean,
  whenAvailable?: string
  picture?: string
  color?: string
  associatedHash: string
}

export type IFilterType = {
  title: string
  type: string
  selected: boolean
}

export type IFilterAvailability = {
  title: string
  type: string
  selected: boolean
}

export type IDomainsReducer = {
  filter: {
    types: IFilterType[],
    isAvailable: boolean,
    availabilities: IFilterAvailability[]
  }
  fetchedDomains: IDomain[]
  filteredDomains: IDomain[]
}

const domainTypes = [
  'Infrastructure',
  'Community',
  'Business',
  'Trade',
  'Development',
  'Security',
  'Finances',
  'Asset',
  'NFT',
  'Regulation',
]

const domainTypesWithFlags = domainTypes.map(type => ({ title: type, type, selected: false }))

const domainAvailabilities = [
  {
    title: 'In 1 month',
    type: 'one_month',
  },
  {
    title: 'In 6 month',
    type: 'six_month',
  },
  {
    title: 'In 1 hour',
    type: 'one_hour',
  },
]

const availabilityTypesWithFlags = domainAvailabilities.map((availability: any) =>
  ({ ...availability, selected: false }),
)

const getDomainsByFilters = (domains: any | IDomain[], selectedTypes: string[]) => {
  return domains.filter((domain: any | IDomain) => {
    if (!selectedTypes.length) return domain

    const availableType = selectedTypes.find(type =>
      domain.categories && domain.categories.map((type: string) => type.toLowerCase()).includes(type.toLowerCase()))

    return availableType
  })
}

const concatDomainsWithCategoriesMock = (domains: IDomain[], domainsCats: Pick<IDomain, 'categories' | 'name'>[]) => {
  return domains.map(domain => {
    const finded = domainsCats.find(
      (withCats: Pick<IDomain, 'categories' | 'name'>) =>
        withCats.name.toLowerCase() === domain.name.toLowerCase().replace(/.crypto|.eth|.zip/gi, ''))

    return {
      ...domain,
      ...(finded && { categories: finded.categories }),
    }
  }) as never[]
}

const counter = createSlice({
  name: 'domains',
  initialState: {
    filter: {
      types: domainTypesWithFlags,
      availabilities: availabilityTypesWithFlags,
      isAvailable: false,
    },
    fetchedDomains: [],
    filteredDomains: [],
  },
  reducers: {
    setFilter: (state, action) => {
      const { isAvailable, types } = action.payload
      const filteredDomainsByTypes = getDomainsByFilters(
        state.fetchedDomains,
        types.filter((type: IFilterType) => type.selected).map(({ type }: Pick<IFilterType, 'type'>) => type),
      )

      const filteredDomainsByAvailability = filteredDomainsByTypes.filter(
        (domain: IDomain) => isAvailable ? domain.isAvailable === isAvailable : domain,
      )

      state.filteredDomains = filteredDomainsByAvailability
      state.filter.types = types
      state.filter.isAvailable = isAvailable
    },
    setDomains: (state, action) => {
      const fetchedDomains = concatDomainsWithCategoriesMock(action.payload, domainsWithCategories)
      const filteredDomains = getDomainsByFilters(
        fetchedDomains,
        state.filter.types.filter(type => type.selected).map(({ type }) => type),
      )

      state.fetchedDomains = fetchedDomains
      state.filteredDomains = filteredDomains
    },
  },
})

export const { reducer: domainsReducer } = counter
export const { setFilter, setDomains } = counter.actions
