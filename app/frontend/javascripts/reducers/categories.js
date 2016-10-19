import {
  FETCH_DATA_SUCCESS,
  CREATE_EVENT_SUCCESS,
  UPDATE_EVENT_SUCCESS,
  DELETE_EVENT_SUCCESS
} from '../constants/actionTypes';

import { forEach } from 'lodash';

const initialState = {};

const categories = (state = initialState, action) => {
  let categories;
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      categories = {};

      forEach(action.categories, cat => categories[cat.id] = cat)

      return {
        ...state,
        [action.user.id]: categories
      };
    case CREATE_EVENT_SUCCESS, UPDATE_EVENT_SUCCESS, DELETE_EVENT_SUCCESS:
      categories = {};
      forEach(action.categories, cat => categories[cat.id] = cat);
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          ...categories
        }
      };
    default:
      return state;
  }
}

export default categories;
