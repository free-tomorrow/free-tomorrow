import { createSlice } from '@reduxjs/toolkit'

export const tempTripSlice = createSlice({
  name: 'tempTrip',
  initialState: {
    dateRange: {startDate: null, endDate: null},
    budget: null
  },
  reducers: {
    addDates: (state, action) => {
      state.dateRange.startDate = action.payload.startDate;
      state.dateRange.endDate = action.payload.endDate;
      return state.dateRange;
    }
  }
})

export const { addDates, addBudget } = tempTripSlice.actions

export default tempTripSlice.reducer