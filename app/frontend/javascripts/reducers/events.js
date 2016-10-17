import {
  CREATE_EVENT, CREATE_EVENT_SUCCESS,
  DELETE_EVENT, DELETE_EVENT_SUCCESS,
  EDIT_EVENT,
  UPDATE_EVENT, UPDATE_EVENT_SUCCESS,
  FETCH_EVENT, FETCH_EVENT_SUCCESS,
  FETCH_EVENTS, FETCH_EVENTS_SUCCESS,
  FETCH_DATA, FETCH_DATA_SUCCESS,
  SET_FILTER
} from '../constants/actionTypes';

import { forEach } from 'lodash';
import event from './event';
import moment from 'moment';

const initialState = {
  loading: false,
  filter: {
    title: null,
    tagId: null,
    startDate: null,
    endDate: null,
  }
}

const events = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT_SUCCESS, UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          [action.event.id]: event(undefined, action)
        }
      };
    case FETCH_EVENT_SUCCESS:
      const userEvents = state[action.userId];
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
      const { events } = action;
      forEach(events, (e) => list[e.id] = e);
      return {
        ...state,
        filter: {
          ...state.filter,
          startDate: moment(events.length > 0 ? events[events.length - 1].event_date : null),
          endDate: moment(events.length > 0 ? events[0].event_date : null),
        },
        [action.user.id]: list,
        loading: false
      };
    case SET_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.name]: action.value
        }
      }
    default:
      return state;
  }
}

export default events;
