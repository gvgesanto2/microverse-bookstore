/* eslint-disable import/prefer-default-export */
import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectBookReducer = (state) => state.book;

export const selectBookItems = createDraftSafeSelector(
  selectBookReducer,
  (bookSlice) => bookSlice.bookItems,
);

export const selectIsLoading = createDraftSafeSelector(
  selectBookReducer,
  (bookSlice) => bookSlice.isLoading,
);
