import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_DATA_SUCCESS, SET_DISPLAYED_USER } from '../constants/actionTypes';
import { UserJSONPath, LogoutUserPath, UserDataJSONPath, UserValidateOnboardingJSONPath } from '../helpers/APIRoutes';
import { defaultFetch, defaultPatch } from '../helpers/API';

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

      return user;
    });
}

export const logoutUser = () => dispatch  => {
  defaultFetch(LogoutUserPath(), { method: 'delete', noJSON: true })
    .then(() => window.location.reload())
}

export const fetchUserData = (userId) => (dispatch, getState) => {
  const { categories } = getState();

  if (categories[userId]) {
    return Promise.resolve();
  }

  return defaultFetch(UserDataJSONPath(userId))
    .then(({ user, categories, events }) => {
      dispatch({
        type: FETCH_DATA_SUCCESS,
        user,
        categories,
        events
      });
    });
}

export const validateOnboarding = () => {
  return defaultPatch(UserValidateOnboardingJSONPath());
}
