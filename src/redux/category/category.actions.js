/* eslint-disable import/prefer-default-export */
import { createAction } from '../../utils/reducer.utils';
import { CATEGORY_ACTION_TYPES } from './category.types';

export const checkStatus = () => createAction(CATEGORY_ACTION_TYPES.CHECK_STATUS);
