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
              dates: [
                // {
                //   start_date:
                // }
              ]
            }),
          });
      
          if (resp.ok) {
              const newTrip = await resp.json();
              return { newTrip };
            } else {
                console.log(resp.error)
                // state.error = resp.status
              }
            }            
);

export const tripSlice = createSlice({
  name: 'trips',
  initialState: {
    tempTrip: {
      dates: [],
      budget: null
    },
    allTrips: [
    ]
},
  reducers: {
    addDates: (state, action) => {
      const newDates = {
        startDate: action.payload.startDate,
        endDate: action.payload.endDate
      }
      state.tempTrip.dates.push(newDates) 
    },
    addBudget: (state, action) => {
      state.tempTrip.budget = action.payload;
    }
  }
})

export const { addDates, addBudget } = tripSlice.actions

export default tripSlice.reducer