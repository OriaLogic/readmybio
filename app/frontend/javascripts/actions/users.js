import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_CATEGORIES_SUCCESS, SET_DISPLAYED_USER } from '../constants/actionTypes';
import { UserJSONPath, LogoutUserPath, UserCategoriesJSONPath } from '../helpers/APIRoutes';
import { defaultFetch } from '../helpers/API';

export const fetchUser = () => dispatch => {
  dispatch({
    type: FETCH_USER
  });

  return defaultFetch(UserJSONPath())
    .then(user => {
      dispatch({
        type: FETCH_USER_SUCCESS,
        user
      });
    });
}

export const logoutUser = () => dispatch  => {
  defaultFetch(LogoutUserPath(), { method: 'delete', noJSON: true })
    .then(() => window.location.reload())
}

export const fetchUserCategories = (userId) => (dispatch, getState) => {
  const currentState = getState();

  if (currentState.users[userId]) {
    return Promise.resolve();
  }

  return defaultFetch(UserCategoriesJSONPath(userId))
    .then(({ user, categories }) => {
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        user
      });
    });
}
