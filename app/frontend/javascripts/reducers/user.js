import { FETCH_USER, FETCH_USER_SUCCESS } from '../constants/actionTypes';

const initialState = {
  loading: true
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { loading: true };
    case FETCH_USER_SUCCESS:
      return {
        ...action.user,
        loading: false
      }
    default:
      return state;
  }
}

export default user;
