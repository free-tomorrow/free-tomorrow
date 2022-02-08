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
    },
  }
})

export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer



// //TODO add error property to each slice
// //TODO API call to get current user:
// export const getUserAsync = createAsyncThunk(
//   'users/getUserAsync',
//   async () => {
//     const resp = await fetch('http://localhost:5000/postsessions/${userid}');
//     if (resp.ok) {
//       const currentUser = await resp.json();
//       return { currentUser }
//     }
//     else {
//       console.log(resp.status)
//       state.error = resp.status
//     }
//   }
// )


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