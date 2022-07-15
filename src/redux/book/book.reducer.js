import { BOOK_ACTION_TYPES } from './book.types';

const initialBooks = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
  },
  {
    id: 2,
    title: 'Book 2',
    author: 'Author 2',
  },
  {
    id: 3,
    title: 'Book 3',
    author: 'Author 3',
  },
];

const INITIAL_STATE = {
  bookItems: initialBooks,
};

const bookReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case BOOK_ACTION_TYPES.SET_BOOK_ITEMS:
      return {
        ...state,
        bookItems: payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
