import { createSlice } from '@reduxjs/toolkit'

export type IDomain = {
  name: string
  category: typeof domainTypes
  price: number
  state: 'Available' | 'Not available',
  whenAvailable?: string
  picture?: string
  color?: string
}

export type IFilterType = {
  title: typeof domainTypes
  type: typeof domainTypes
  selected: boolean
}

export type IFilterAvailability = {
  title: string
  type: typeof availabilityTypes
  selected: boolean
}

export type IDomainsReducer = {
  filter: {
    types: IFilterType[]
    availabilities: IFilterAvailability[]
  }
  fetchedDomains: IDomain[]
  filteredDomains: IDomain[]
}

const domainTypes = [
  'IT',
  'financial',
  'services',
  'marketing',
  'beauty',
  'industry',
  'traveling',
  'energy',
  'community',
  'automotive',
  'education',
  'legal',
  'media',
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

const availabilityTypes = domainAvailabilities.map((availability: any) => availability.type)
const availabilityTypesWithFlags = domainAvailabilities.map((availability: any) =>
  ({ ...availability, selected: false }),
)

const counter = createSlice({
  name: 'domains',
  initialState: {
    filter: {
      types: domainTypesWithFlags,
      availabilities: availabilityTypesWithFlags,
    },
    fetchedDomains: [],
    filteredDomains: [],
  },
  reducers: {
    setDomainsType: (state, action) => {
      state.filter = {
        ...state.filter,
        types: action.payload,
      }
    },
    setDomainsAvailability: (state, action) => {
      state.filter = {
        ...state.filter,
        availabilities: action.payload,
      }
    },
    setFilter: (state, action) => {
      const { payload } = action
      const { types, availabilities } = payload

      state.filter = {
        ...state.filter,
        types,
        availabilities,
      }
    },
    setDomains: (state, action) => {
      state.fetchedDomains = action.payload
    },
  },
})

export const { reducer: domainsReducer } = counter
export const { setDomainsType, setDomainsAvailability, setFilter, setDomains } = counter.actions
