import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import constructorStandingsReducer from '../features/constructors/constructorStandingsSlice'
import driverStandingsReducer from '../features/drivers/driverStandingsSlice'

export const store = configureStore({
  reducer: {
    constructorStandings: constructorStandingsReducer,
    driverStandings: driverStandingsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
