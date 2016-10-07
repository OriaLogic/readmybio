import {
  FETCH_EVENTS, FETCH_EVENTS_SUCCESS,
  CREATE_EVENT, CREATE_EVENT_SUCCESS,
  FETCH_EVENT, FETCH_EVENT_SUCCESS,
  UPDATE_EVENT, UPDATE_EVENT_SUCCESS,
} from '../constants/actionTypes';
import { EventsJSONPath, EventJSONPath, CreateEventJSONPath, CreateEventImagesJSONPath, UpdateEventJSONPath } from '../helpers/APIRoutes';
import { defaultFetch, defaultPost, defaultPatch } from '../helpers/API';
import { forEach } from 'lodash';

export const fetchEventsForUserAndCategory = (userId, categoryId) => dispatch => {
  dispatch({
    type: FETCH_EVENTS,
    userId
  });

  return defaultFetch(EventsJSONPath(userId, categoryId))
    .then(events => {
      dispatch({
        type: FETCH_EVENTS_SUCCESS,
        events,
        userId
      });
    });
}

export const fetchEvent = (userId, eventId) => (dispatch, getState) => {
  const { events, users } = getState();
  userId = users.displayedUserId;

  const toFetchEvent = events[userId][eventId];
  if (toFetchEvent && toFetchEvent.fullFetch) {
    return Promise.resolve();
  }

  return defaultFetch(EventJSONPath(userId, eventId))
    .then(event => {
      dispatch({
        type: FETCH_EVENT_SUCCESS,
        event,
        eventId,
        userId
      });
    });
};

export const createEvent = (e) => (dispatch, getState) => {
  const userId = getState().users.currentUserId;

  dispatch({
    type: CREATE_EVENT,
    event: e,
    userId
  });

  let event, tags;
  return defaultPost(CreateEventJSONPath(), {
    body: JSON.stringify({ event: e })
  }).then(({ event, tags }) => {
    event = event;
    tags = tags;

    let data = new FormData();
    forEach(e.images, image => data.append(`images_${image.name}`, image));
    return defaultPost(CreateEventImagesJSONPath(event.id), {
      body: data,
      headers: {}
    });
  }).then((event) => {
      dispatch({
        type: CREATE_EVENT_SUCCESS,
        event,
        userId,
        categories: tags
      });

      return event;
  });
}

export const updateEvent = (userId, eventId, eventParams) => dispatch => {
  dispatch({
    type: UPDATE_EVENT,
    eventId,
    userId
  });

  return defaultPatch(UpdateEventJSONPath(userId, eventId), {
    body: JSON.stringify({ event: eventParams })
  }).then(e => dispatch({
      type: UPDATE_EVENT_SUCCESS,
      event: e,
      eventId,
      userId
    }));
}

export const setFilter = (userId, value, name) => {
  return {
    type: 'SET_FILTER',
    name,
    value,
    userId
  }
}
