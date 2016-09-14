import {
  FETCH_USER_SUCCESS,
  FETCH_CATEGORIES_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  list: {},
  currentUserId: null,
  displayedUserId: null
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          [action.user.id]: action.user
        },
        currentUserId: action.user.id
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          [action.user.id]: action.user
        },
        displayedUserId: action.user.id
      };
    default:
      return state;
  }
}

export default users;
