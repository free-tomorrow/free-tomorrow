import React from 'react';
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'users',
  initialState: [{
    id: 1, 
    name: 'Jordan'
  }],
  reducers: {
    changeName: (state, action) => {
      const newPerson = {
        id: Date.now(),
        name: action.payload.name
      }
      state.push(newPerson)
    }
  }
})

export const { changeName } = userSlice.actions

export default userSlice.reducer