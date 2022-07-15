import { CATEGORY_ACTION_TYPES } from './category.types';

const INITIAL_STATE = {
  categories: [],
};

const categoryReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case CATEGORY_ACTION_TYPES.CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoryReducer;
