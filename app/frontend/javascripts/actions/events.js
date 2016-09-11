import { FETCH_EVENTS, FETCH_EVENTS_SUCCESS } from '../constants/actionTypes';
import { EventsJSONPath } from '../helpers/APIRoutes';
import { defaultFetch } from '../helpers/API';

export const fetchEventsForUser = (userId) => dispatch => {
  dispatch({
    type: FETCH_EVENTS,
    userId
  });

  defaultFetch(EventsJSONPath())
    .then(data => {
      const { events, user } = data;
      dispatch({
        type: FETCH_EVENTS_SUCCESS,
        user,
        events 
      });
    });
}
