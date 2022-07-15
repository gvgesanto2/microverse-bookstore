import { createAction } from '../../utils/reducer.utils';
import { BOOK_ACTION_TYPES } from './book.types';

export const addBookItem = (bookItems, bookToAdd) => {
  const newBookItems = [...bookItems, bookToAdd];
  return createAction(BOOK_ACTION_TYPES.SET_BOOK_ITEMS, newBookItems);
};

export const removeBookItem = (bookItems, bookToRemove) => {
  const newBookItems = bookItems.filter(({ id }) => bookToRemove.id !== id);
  return createAction(BOOK_ACTION_TYPES.SET_BOOK_ITEMS, newBookItems);
};
