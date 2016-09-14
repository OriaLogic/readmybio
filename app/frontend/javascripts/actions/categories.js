import { FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS } from '../constants/actionTypes';
import { CategoriesJSONPath } from '../helpers/APIRoutes';
import { defaultFetch } from '../helpers/API';

export const fetchCategoriesForUser = (userId) => (dispatch, currentState) => {
  console.log('called')
  // dispatch({
  //   type: FETCH_EVENTS,
  //   userId
  // });
  //
  // defaultFetch(EventsJSONPath())
  //   .then(data => {
  //     const { events, user } = data;
  //     dispatch({
  //       type: FETCH_EVENTS_SUCCESS,
  //       user,
  //       events
  //     });
  //   });
}
