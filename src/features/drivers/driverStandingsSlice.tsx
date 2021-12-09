import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { store, AppDispatch } from '../../app/store'
import axios from '../../app/axios'


// Thunks
type FetchDriverStandingsReturned = ReturnType<() => ({
  standings: any
})>
type FetchDriverStandingsArgs = {
  season: string
}

export const fetchDriverStandings = createAsyncThunk<
  FetchDriverStandingsReturned,
  FetchDriverStandingsArgs
>('driverStandings/fetchDriversStandings', async ({ season }) => {
  const requestURL = `/f1/${season}/driverStandings.json`
  const response = await axios.get(requestURL)
  return {
    standings: driverStandingsAdapter(response.data)
  }
})


// Slice
const driverStandingsSlice = createSlice({
  name: 'driverStandings',
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDriverStandings.pending, (state: any, action: any) => {
        const { season } = action.meta.arg
        state[season] = {
          status: 'loading'
        }
      })
      .addCase(fetchDriverStandings.fulfilled, (state: any, action: any) => {
        const { season } = action.meta.arg
        const { standings } = action.payload
        state[season] = {
          status: 'fetched',
          standings
        }
      })
      .addCase(fetchDriverStandings.rejected, (state: any, action: any) => {
        const { season } = action.meta.arg
        state[season] = {
          status: 'failed',
          error: action.error
        }
      })
  }
})

export default driverStandingsSlice.reducer

export const selectDriverStandingsState = (state: any) => state.driverStandings
export const selectDriverStandingsPodium = (state: any, season: string) =>
  state.driverStandings[season]?.standings?.slice(0, 10) || []


// Helpers
export const loadDriverStandings = (season: string, dispatch: AppDispatch) => {
  const driverStandings = selectDriverStandingsState(store.getState())
  if (driverStandings[season]?.status !== 'fetched') {
    dispatch(fetchDriverStandings({ season }))
  }
}


// Utils
const driverStandingsAdapter = (res: any) => {
  const { MRData: { StandingsTable: { StandingsLists: listsData } } } = res

  return listsData[0]['DriverStandings']
    .map((driver: any) => {
      const { Driver: { driverId, familyName, givenName, nationality, url }, Constructors, ...rest } = driver
      const constructor = (Constructors && Constructors.length && Constructors[0]) || undefined

      return {
        driverId,
        familyName,
        givenName,
        nationality,
        url,
        constructor,
        ...rest
      }
    })
}
