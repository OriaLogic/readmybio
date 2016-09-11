import { FETCH_USER, FETCH_USER_SUCCESS } from '../constants/actionTypes';
import { UserJSONPath, LogoutUserPath } from '../helpers/APIRoutes';
import { defaultFetch } from '../helpers/API';

export const fetchUser = () => dispatch => {
  dispatch({
    type: FETCH_USER
  });

  defaultFetch(UserJSONPath())
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
