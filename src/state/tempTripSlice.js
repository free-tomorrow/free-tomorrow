import { createSlice } from '@reduxjs/toolkit';

export const tempTripSlice = createSlice({
  name: 'tempTrip',
  initialState: {},
  reducers: {
    addDates: (state, action) => {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
    addBudget: (state, action) => {
      state.budget = action.payload;
    }
  }
})

export const { addDates, addBudget } = tempTripSlice.actions

export default tempTripSlice.reducer