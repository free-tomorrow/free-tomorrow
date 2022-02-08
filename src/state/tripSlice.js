import { createSlice } from '@reduxjs/toolkit'

export const tripSlice = createSlice({
  name: 'trips',
  initialState: [
    {
      id: 1,
      users: [20],
      confirmed: false,
      // toggles true when all users on the trip have confirmed their calendar & budget
      proposed_budget: 500,
      // PATCH request when a user changes budget (no request if budget isn't changed), POST when new trip is first made
      available_dates: [
        {
          user_id: 1,
          start_date: 1643950800000,
          end_date: 1645246799999
        }
      ]
    }
  ],
  reducers: {
    addDates: (state, action) => {
      const newDateRange = {}
      state.push(newDateRange)
    }
  }
})

export const { addDates } = tripSlice.actions

export default tripSlice.reducer