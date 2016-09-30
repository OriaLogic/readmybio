import {
  CREATE_EVENT, CREATE_EVENT_SUCCESS,
  DELETE_EVENT, DELETE_EVENT_SUCCESS,
  EDIT_EVENT,
  UPDATE_EVENT, UPDATE_EVENT_SUCCESS,
  FETCH_EVENT, FETCH_EVENT_SUCCESS,
  FETCH_EVENTS, FETCH_EVENTS_SUCCESS,
  FETCH_DATA, FETCH_DATA_SUCCESS
} from '../constants/actionTypes';

import { forEach } from 'lodash';
import event from './event';

const initialState = {
  loading: false,
  filter: {
    category: null,
    date: null,
    title: null
  }
}

const events = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          [action.event.id]: event(undefined, action)
        }
      };
    case FETCH_EVENT_SUCCESS:
      const userEvents = state[action.userId];
      console.log(userEvents, userEvents[action.eventId], action, event(userEvents[action.eventId], action))
      return {
        ...state,
        [action.userId]: {
          ...userEvents,
          [action.eventId]: event(userEvents[action.eventId], action)
        }
      }
    case FETCH_EVENTS, FETCH_DATA:
      return {
        ...state,
        loading: true
      };
    case FETCH_EVENTS_SUCCESS, FETCH_DATA_SUCCESS:
      const list = {};
      forEach(action.events, (e) => list[e.id] = e);
      return {
        ...state,
        [action.user.id]: list,
        loading: false
      };
    default:
      return state;
  }
}

export default events;
