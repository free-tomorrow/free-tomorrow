import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
import tempTripReducer from './tempTripSlice.js';
import tripReducer from './tripSlice.js'

export const store = configureStore({
  reducer: {
    users: userReducer,
    tempTrip: tempTripReducer,
    trips: tripReducer
  },
});
