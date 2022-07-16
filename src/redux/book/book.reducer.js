/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { addBookItem, fetchBookItems } from './book.actions';
// import { BOOK_ACTION_TYPES } from './book.types';

const INITIAL_STATE = {
  bookItems: [],
  isLoading: false,
  error: null,
};

// const bookReducer = (state = INITIAL_STATE, { type, payload }) => {
//   switch (type) {
//     case BOOK_ACTION_TYPES.SET_BOOK_ITEMS:
//       return {
//         ...state,
//         bookItems: payload,
//       };
//     case BOOK_ACTION_TYPES.FETCH_BOOKS_START:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case BOOK_ACTION_TYPES.FETCH_BOOKS_SUCCESS:
//       return { ...state, isLoading: false, bookItems: payload };
//     case BOOK_ACTION_TYPES.FETCH_BOOKS_FAILURE:
//       return { ...state, isLoading: false, error: payload };
//     default:
//       return state;
//   }
// };

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
