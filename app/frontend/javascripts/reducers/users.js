import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_EVENTS_SUCCESS } from '../constants/actionTypes';

const initialState = {
  currentUser: {
    loading: true
  },

  displayedUser: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        currentUser: { loading: true }
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...action.user,
          loading: false
        }
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        displayedUser: action.user
      };
    default:
      return state;
  }
}

export default user;
