import { FETCH_EVENTS, FETCH_EVENTS_SUCCESS, CREATE_EVENT, CREATE_EVENT_SUCCESS } from '../constants/actionTypes';
import { EventsJSONPath, CreateEventJSONPath } from '../helpers/APIRoutes';
import { defaultFetch, defaultPost } from '../helpers/API';

export const fetchEventsForUserAndCategory = (userId, categoryId) => dispatch => {
  dispatch({
    type: FETCH_EVENTS
  });

  defaultFetch(EventsJSONPath(userId, categoryId))
    .then(events => {
      dispatch({
        type: FETCH_EVENTS_SUCCESS,
        events
      });
    });
}

export const createEvent = (e) => dispatch => {
  dispatch({
    type: CREATE_EVENT,
    event: e
  });

  defaultPost(CreateEventJSONPath(), {
    body: JSON.stringify({ event: e })
  }).then(e => dispatch({
      type: CREATE_EVENT_SUCCESS,
      event: e
    }));
}
