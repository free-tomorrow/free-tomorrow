import React from 'react';
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'users',
  initialState: [{
    id: 1, 
    name: 'Jordan'
  }],
  reducers: {
    addUser: (state, action) => {
      const newPerson = {
        id: Date.now(),
        name: action.payload.name
      }
      state.push(newPerson)
    },
    deleteUser: (state, action) => {
      const foundUser = state.find(user => user.name === action.payload.name) 
      state.pop(foundUser)
    }
  }
})

export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer