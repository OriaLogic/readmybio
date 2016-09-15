import {
  CREATE_EVENT, CREATE_EVENT_SUCCESS,
  DELETE_EVENT, DELETE_EVENT_SUCCESS,
  EDIT_EVENT,
  UPDATE_EVENT, UPDATE_EVENT_SUCCESS,
  FETCH_EVENTS, FETCH_EVENTS_SUCCESS
} from '../constants/actionTypes';

import { forEach } from 'lodash';

const initialState = {
  list: {},
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
      const list = {};
      forEach(action.events, (e) => list[e.id] = e);
      return {
        ...state,
        list,
        loading: false
      };
    default:
      return state;
  }
}

export default events;
