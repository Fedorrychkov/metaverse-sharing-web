import { configureStore } from '@reduxjs/toolkit'
import { domainsReducer } from './domains'

export const store = configureStore({
  reducer: {
    domains: domainsReducer,
  },
})
