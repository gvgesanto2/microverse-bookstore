/* eslint-disable import/prefer-default-export */
import bookReducer from './book/book.reducer';
import categoryReducer from './category/category.reducer';

export const rootReducer = {
  book: bookReducer,
  category: categoryReducer,
};
