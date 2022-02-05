import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer.js';

export const store = configureStore({
  reducer: {
    users: userReducer
  },
});
