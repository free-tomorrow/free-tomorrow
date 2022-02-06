import { createSlice } from '@reduxjs/toolkit'

export const tempTripSlice = createSlice({
  name: 'tempTrip',
  initialState: {
    dateRange: [],
    budget: null
  },
  reducers: {
    addDates: (state, action) => {
      const newDateRange = {}
      state.dateRange.push(newDateRange)
    }
  }
})

export const { addDates, addBudget } = tempTripSlice.actions

export default tempTripSlice.reducer