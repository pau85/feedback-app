import { createSlice } from '@reduxjs/toolkit';

const someSlice = createSlice({
  name: 'some',
  initialState: {},
  reducers: {
    // define your reducers here
  },
});

export const { actions, reducer } = someSlice;