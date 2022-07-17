/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { addBookItem, fetchBookItems } from './book.actions';

const INITIAL_STATE = {
  bookItems: [],
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState: INITIAL_STATE,
  extraReducers: {
    [fetchBookItems.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBookItems.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.bookItems = payload;
    },
    [fetchBookItems.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [addBookItem.pending]: (state) => {
      state.isLoading = true;
    },
    [addBookItem.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.bookItems = payload;
    },
    [addBookItem.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
  },
});

export default bookSlice.reducer;
