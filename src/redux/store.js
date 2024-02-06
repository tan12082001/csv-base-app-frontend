import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from './userAuthSlice';

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
  },
});

export default store;
