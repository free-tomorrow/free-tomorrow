import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const createNewTripAsync = createAsyncThunk(
  'trips/createNewTripAsync',
  async (payload) => {
      const resp = await fetch('https://free-tomorrow-be.herokuapp.com/trips/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
            },
            body: {
              "trip_info": {
                 "name": "My trip",
                "created_by": "drnecrason@comcast.net",
                "budget": 1500
              },
              "dates": [{"start_date": 1644555600000, "end_date": 1644555600000}]
              // })
            },
          });
      
          if (resp.ok) {
              const newTrip = await resp.json();
              console.log(newTrip)
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
    }
  }, 
  extraReducers: {
    [createNewTripAsync.fulfilled] : (state, action) => {
      console.log(state, 'state')
      console.log(action, 'action')
      console.log(action.payload, 'action.payload')
      // return action.payload.newTrip;
    }
  }
})

export const { addDates, addBudget, addEmails } = tripSlice.actions

export default tripSlice.reducer