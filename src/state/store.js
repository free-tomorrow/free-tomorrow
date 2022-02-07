import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';

export const store = configureStore({
  reducer: {
    users: userReducer
  },
});
            // && REDUCERS:
            // extraReducers: {
            //   [getUserAsync.fulfilled] = (state,action) => {
            //     return action.payload.user
            //   },
            //   [addUserAsync.fulfilled] = (state,action) => {
            //     return action.payload.user
            //   }
            // }