/* eslint-disable implicit-arrow-linebreak */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewBook, fetchBooks, removeBookById } from '../../services/api.service';
import { BOOK_ACTION_TYPES } from './book.types';

export const fetchBookItems = createAsyncThunk(
  BOOK_ACTION_TYPES.FETCH_BOOKS_ASYNC,
  async () => {
    const bookItems = await fetchBooks();
    return bookItems;
  },
);

export const addBookItem = createAsyncThunk(
  BOOK_ACTION_TYPES.SET_BOOK_ITEMS_ASYNC,
  async (bookToAdd, { getState }) => {
    const { bookItems } = getState().book;
    await addNewBook(bookToAdd);
    return [...bookItems, bookToAdd];
  },
);

export const removeBookItem = createAsyncThunk(
  BOOK_ACTION_TYPES.SET_BOOK_ITEMS_ASYNC,
  async ({ id }, { getState }) => {
    const { bookItems } = getState().book;
    await removeBookById(id);
    return bookItems.filter((book) => id !== book.id);
  },
);
