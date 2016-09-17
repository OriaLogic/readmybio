import {
  FETCH_EVENTS, FETCH_EVENTS_SUCCESS,
  CREATE_EVENT, CREATE_EVENT_SUCCESS,
  FETCH_EVENT, FETCH_EVENT_SUCCESS,
  UPDATE_EVENT, UPDATE_EVENT_SUCCESS,
} from '../constants/actionTypes';
import { EventsJSONPath, EventJSONPath, CreateEventJSONPath, UpdateEventJSONPath } from '../helpers/APIRoutes';
import { defaultFetch, defaultPost, defaultPatch } from '../helpers/API';

export const fetchEventsForUserAndCategory = (userId, categoryId) => dispatch => {
  dispatch({
    type: FETCH_EVENTS
  });

  return defaultFetch(EventsJSONPath(userId, categoryId))
    .then(events => {
      dispatch({
        type: FETCH_EVENTS_SUCCESS,
        events
      });
    });
}

export const fetchEvent = (userId, eventId) => (dispatch, getState) => {
  const { events } = getState();

  const toFetchEvent = events.list[eventId];
  if (toFetchEvent && toFetchEvent.fullFetch) {
    return Promise.resolve();
  }

  return defaultFetch(EventJSONPath(userId, eventId))
    .then(event => {
      dispatch({
        type: FETCH_EVENT_SUCCESS,
        event,
        eventId
      });
    });
};

export const createEvent = (e) => dispatch => {
  dispatch({
    type: CREATE_EVENT,
    event: e
  });

  return defaultPost(CreateEventJSONPath(), {
    body: JSON.stringify({ event: e })
  }).then(e => dispatch({
      type: CREATE_EVENT_SUCCESS,
      event: e
    }));
}

export const updateEvent = (userId, eventId, eventParams) => dispatch => {
  dispatch({
    type: UPDATE_EVENT,
    eventId
  });

  return defaultPatch(UpdateEventJSONPath(userId, eventId), {
    body: JSON.stringify({ event: eventParams })
  }).then(e => dispatch({
      type: UPDATE_EVENT_SUCCESS,
      event: e,
      eventId
    }));
}
