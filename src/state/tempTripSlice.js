import { createSlice } from '@reduxjs/toolkit';

export const tempTripSlice = createSlice({
  name: 'tempTrip',
  initialState: {},
  reducers: {
    addDates: (state, action) => {
      console.log(action.payload)
      // const dateRange = {startDate: action.payload.startDate, endDate: action.payload.endDate}

      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
      
      console.log(state)
    }
  }
})

export const { addDates, addBudget } = tempTripSlice.actions

export default tempTripSlice.reducer