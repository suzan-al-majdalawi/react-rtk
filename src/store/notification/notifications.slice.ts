import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { resetCountFromFakeApi } from '../../fakeApi';

export const resetCountViaApi = createAsyncThunk(
  'notification/resetCountViaApi',
   async () => {
    // Simulate an API call to reset the count
    try {
      const response = await resetCountFromFakeApi();
      return response.success;
    } catch (err) {
      alert((err as Error).message);
      throw new Error('', { cause: err });
    }
  }
);

export interface NotificationsState {
  count: number;
  resetStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: NotificationsState = {
  count: 0,
  resetStatus: 'idle',
}

export const notificationsSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetCountViaApi.pending, (state) => {
        state.resetStatus = 'loading';
        state.count = 0; // Optionally reset the count immediately when the API call starts
      })
      .addCase(resetCountViaApi.fulfilled, (state) => {
        state.resetStatus = 'succeeded';
        state.count = 0;
      })
      .addCase(resetCountViaApi.rejected, (state, action) => {
        state.resetStatus = 'failed';
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset } = notificationsSlice.actions;

export default notificationsSlice.reducer