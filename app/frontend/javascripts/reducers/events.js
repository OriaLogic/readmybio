import {
  CREATE_EVENT, CREATE_EVENT_SUCCESS,
  DELETE_EVENT, DELETE_EVENT_SUCCESS,
  EDIT_EVENT,
  UPDATE_EVENT, UPDATE_EVENT_SUCCESS
} from '../constants/actionTypes';

import {
  FETCH_EVENTS,
  FETCH_EVENTS_SUCCESS
} from '../constants/actionTypes';

// import event from './event';

const initialState = {
  events: [],
  loading: false
}

const events = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case CREATE_EVENT_SUCCESS:
    case DELETE_EVENT:
      return state;
    case FETCH_EVENTS:
      return {
        ...state,
        loading: true
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.events,
        loading: false
      };
    default:
      return state;
  }
}

export default events;
