import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
import tripReducer from './tripSlice.js'

export const store = configureStore({
  reducer: {
    users: userReducer,
    trips: tripReducer
  },
});
