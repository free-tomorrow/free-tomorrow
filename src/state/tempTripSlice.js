import { createSlice } from '@reduxjs/toolkit';

export const tempTripSlice = createSlice({
  name: 'tempTrip',
  initialState: {
    dates: [],
    budget: null
  },
  reducers: {
    addDates: (state, action) => {
      const newDates = {
        startDate: action.payload.startDate,
        endDate: action.payload.endDate
      }
      state.dates.push(newDates) 
    },
    addBudget: (state, action) => {
      state.budget = action.payload;
    }
  }
})

export const { addDates, addBudget } = tempTripSlice.actions

export default tempTripSlice.reducer