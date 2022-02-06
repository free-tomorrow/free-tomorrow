import { createSlice } from '@reduxjs/toolkit'

export const tempTripSlice = createSlice({
  name: 'tempTrip',
  initialState: {
    
  },
  reducers: {
    addDates: (state, action) => {
      const newDateRange = {}
      state.push(newDateRange)
    }
  }
})

export const { addDates, addBudget } = tempTripSlice.actions

export default tempTripSlice.reducer