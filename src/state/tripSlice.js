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
                name: payload.tripInfo.name,
                created_by: payload.tripInfo.email,
                budget: payload.tripInfo.budget
              },
              // dates: payload.dates
              })
            })
          // });
      
          if (resp.ok) {
              const newTrip = await resp.json();
              console.log(newTrip)
              return { newTrip };
            } else {
                console.log(resp.errors)
                // state.error = resp.status
              }
            }        
);

export const tripSlice = createSlice({
  name: 'trips',
  initialState: {
    tempTrip: {
      tripName: null,
      dates: [],
      budget: null,
      shareEmails: null
    },
    allTrips: [
    ]
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
      console.log(action.payload)
    }
  }, 
  extraReducers: {
    [createNewTripAsync.fulfilled] : (state, action) => {
      console.log(action.payload, 'payload')
      return action.payload.newTrip;
    }
  }
})

export const { addDates, addBudget, addEmails } = tripSlice.actions

export default tripSlice.reducer