import { configureStore } from '@reduxjs/toolkit';
import { reducer as someReducer } from './someSlice';

const store = configureStore({
  reducer: {
    some: someReducer,
    // add other reducers here
  },
});

export default store;