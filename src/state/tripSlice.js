import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const createNewTripAsync = createAsyncThunk(
  'trips/createNewTripAsync',
  async (payload) => {
    const resp = await fetch('https://free-tomorrow-be.herokuapp.com/trips/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        trip_info: {
          name: payload.name,
          created_by: payload.email,
          budget: payload.budget
        },
        dates: payload.dates
      })
    })
    // });

    if (resp.ok) {
      const newTrip = await resp.json();
      // console.log(newTrip)
      return { newTrip };
    } else {
      // console.log(resp.errors)
      // state.error = resp.status
    }
  }
);

export const getAllTripsAsync = createAsyncThunk(
  'trips/getAllTripsAsync',
  async () => {
    const resp = await fetch('https://free-tomorrow-be.herokuapp.com/trips/')
    if (resp.ok) {
      const allTrips = await resp.json()
      return { allTrips }
    } else {
      console.log(resp.err)
    }
  },
)

export const tripSlice = createSlice({
  name: 'trips',
  initialState: {
    tempTrip: {
      tripName: null,
      dates: [],
      budget: null
    },
    sharedTrip: {},
    allTrips: []
  },
  reducers: {
    addDates: (state, action) => {
      const newDates = {
        start_date: action.payload.startDate,
        end_date: action.payload.endDate
      }
      state.tempTrip.dates.push(newDates)
    },
    addBudget: (state, action) => {
      state.tempTrip.budget = action.payload;
    },
    addEmails: (state, action) => {
      state.tempTrip.shareEmails = action.payload;
    }
  },
  extraReducers: {
    [createNewTripAsync.fulfilled]: (state, action) => {
      // something needs to go here. bad request
      return action.payload.newTrip;
    },
    [getAllTripsAsync.fulfilled]: (state, action) => {
      state.allTrips.push(action.payload)
    }
  },

})

export const { addDates, addBudget, addEmails } = tripSlice.actions

export default tripSlice.reducer