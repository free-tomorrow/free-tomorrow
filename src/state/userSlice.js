import React from 'react';
import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'users',
  initialState: [
    {
      id: 20,
      name: 'Delilah',
      email: 'drnecrason@comcast.net',
      trips: [
        {
          trip_id: 1,
          created_by: 'Delilah',
          is_verified: true
          // toggles true when user has filled out their calendar & budget for the trip
        }
      ]
    }
  ],
  reducers: {
    addUser: (state, action) => {
      const newPerson = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        trips: []
      }
      state.push(newPerson)
    },
    deleteUser: (state, action) => {
      const foundUser = state.find(user => user.name === action.payload.name) 
      state.splice(state.indexOf(foundUser), 1)
    }
  }
})

export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer