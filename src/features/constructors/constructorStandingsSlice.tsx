import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../app/axios'
import { AppDispatch, store } from '../../app/store'


// Thunks
type FetchConstructorStandingsReturned = ReturnType<() => ({
  standings: any
})>
type FetchConstructorStandingsArgs = {
  season: string
}

export const fetchConstructorStandings = createAsyncThunk<
  FetchConstructorStandingsReturned,
  FetchConstructorStandingsArgs
>('constructorStandings/fetchConstructorStandings', async ({ season }) => {
  const requestURL = `/f1/${season}/constructorStandings.json`
  const response = await axios.get(requestURL)
  return {
    standings: constructorStadingsAdapter(response.data)
  }
})


// Slice
const constructorStandingsSlice = createSlice({
  name: 'constructorStandings',
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchConstructorStandings.pending, (state: any, action) => {
        const { season } = action.meta.arg
        state[season] = {
          status: 'loading'
        }
      })
      .addCase(fetchConstructorStandings.fulfilled, (state: any, action: any) => {
        const { season } = action.meta.arg
        const { standings } = action.payload
        state[season] = {
          status: 'fetched',
          standings
        }
      })
      .addCase(fetchConstructorStandings.rejected, (state: any, action: any) => {
        const { season } = action.meta.arg
        state[season] = {
          status: 'failed',
          error: action.error
        }
      })
  }
})

export default constructorStandingsSlice.reducer

export const selectConstructorStandingsState = (state: any) => state.constructorStandings
export const selectConstructorStandingsPodium = (state: any, season: string) =>
  state.constructorStandings[season]?.standings?.slice(0, 10) || []


// Helpers
export const loadConstructorStandings = (season: string, dispatch: AppDispatch) => {
  const constructorStandings = selectConstructorStandingsState(store.getState())
  if (constructorStandings[season]?.status !== 'fetched') {
    dispatch(fetchConstructorStandings({ season }))
  }
}


// Utils
const constructorStadingsAdapter = (res: any) => {
  const { MRData: { StandingsTable: { StandingsLists: listsData } } } = res

  return listsData[0]['ConstructorStandings']
    .map((constructor: any) => {
      const { Constructor, ...rest } = constructor
      
      return {
        ...Constructor,
        ...rest
      }
    })
}
