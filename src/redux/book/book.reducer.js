import { BOOK_ACTION_TYPES } from './book.types';

const INITIAL_STATE = {
  bookItems: [],
};

const bookReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

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
