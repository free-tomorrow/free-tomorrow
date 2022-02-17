import React from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getUserAsync = createAsyncThunk(
    'users/getUserAsync',
    async (payload) => {
        const resp = await fetch('https://free-tomorrow-be.herokuapp.com/sessions/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            });
        
            if (resp.ok) {
                const currentUser = await resp.json();
               
                return { currentUser };
              } else {
                  console.log(resp.error)
                  // state.error = resp.status
                }
              }            
);

export const createUserAsync = createAsyncThunk(
    'users/createUserAsync',
    async (payload) => {
        const resp = await fetch('https://free-tomorrow-be.herokuapp.com/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: payload.name, 
                email: payload.email
              }),
            });
        
            if (resp.ok) {
                const currentUser = await resp.json();
                return { currentUser };
              } else {
                  console.log(resp.error)
                  // state.error = resp.status
                }
              }            
);




export const userSlice = createSlice({
  name: 'users',
  initialState: [
  ],
  reducers: {
    addUserToStore: (state, action) => {
      return action.payload
    },
    removeUserFromStore: (state, action) => {
      localStorage.clear()
  
      state.users = action.payload
      // return action.payload
    }
  },
  extraReducers : {
    [getUserAsync.fulfilled] : (state,action) => {
      const savedUser = JSON.stringify(action.payload.currentUser)
      localStorage.setItem('savedUser', savedUser)
     
      return action.payload.currentUser
    },
    [createUserAsync.fulfilled] : (state, action) => {
    
      const savedUser = JSON.stringify(action.payload.currentUser)
      localStorage.setItem('savedUser', savedUser)
      // state.push(action.payload.currentUser)
      return action.payload.currentUser
    }
  }
})

export const { addUserToStore, removeUserFromStore } = userSlice.actions
export default userSlice.reducer



// //TODO add error property to each slice
// //TODO API call to get current user:

// //TODO API call to register new user:
// export const addTodoAsync = createAsyncThunk(
//     'todos/addTodoAsync',
//     async (payload) => {
//         const resp = await fetch('http://localhost:5000/postUsers', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({ user: payload }),
//         ^^^maybe? 
//             });
        
//             if (resp.ok) {
//                 const currentUser = await resp.json();
//                 return { currentUser };
//               } else {
//                   console.log(resp.error)
//                   state.error = resp.status
//                 }
//               }            
// );

// && REDUCERS:
// extraReducers: {
//   [getUserAsync.fulfilled] = (state,action) => {
//      const index = state.findIndex((user) => user.email === action.payload.email)
//      return action.payload.user[index]
//   },
//   [addUserAsync.fulfilled] = (state,action) => {
//     return action.payload.user
//   }
// }