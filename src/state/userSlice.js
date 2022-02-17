
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
    }
  },
  extraReducers: {
    [getUserAsync.fulfilled]: (state, action) => {
      const savedUser = JSON.stringify(action.payload.currentUser)
      localStorage.setItem('savedUser', savedUser)

      return action.payload.currentUser
    },
    [createUserAsync.fulfilled]: (state, action) => {

      const savedUser = JSON.stringify(action.payload.currentUser)
      localStorage.setItem('savedUser', savedUser)
      return action.payload.currentUser
    }
  }
})

export const { addUserToStore, removeUserFromStore } = userSlice.actions
export default userSlice.reducer
