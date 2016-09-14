import {
  FETCH_CATEGORIES_SUCCESS
} from '../constants/actionTypes';

const initialState = {};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
          ...categories,
          [action.user.id]: action.categories
        };
    default:
      return state;
  }
}

export default categories;
