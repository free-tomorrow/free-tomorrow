import React from 'react';
import { createSlice } from '@reduxjs/toolkit'
import { getDefaultNormalizer } from '@testing-library/react';

export const tripSlice = createSlice({
  name: 'trips',
  initialState: [{
    id: 1,
    travelers: [20],
    invitedUsers: [],
    confirmed: false,
    proposedBudget: 500
  }],
  reducers: {
    addDates: (state, action) => {
      const newDateRange = {}
      state.push(newDateRange)
    }
  }
})

export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer