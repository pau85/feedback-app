import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FeedbackState {
  value: number
}

const initialState = { value: 0 } satisfies FeedbackState as FeedbackState

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = feedbackSlice.actions
export default feedbackSlice.reducer

// Resources used for this slice:
// https://redux-toolkit.js.org/api/createslice/