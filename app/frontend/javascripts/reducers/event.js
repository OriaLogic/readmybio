import {
  CREATE_EVENT, CREATE_EVENT_SUCCESS,
  DELETE_EVENT, DELETE_EVENT_SUCCESS,
  EDIT_EVENT,
  UPDATE_EVENT, UPDATE_EVENT_SUCCESS,
  FETCH_EVENT, FETCH_EVENT_SUCCESS,
} from '../constants/actionTypes';

const initialState = undefined;

const event = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT_SUCCESS, UPDATE_EVENT_SUCCESS:
      return {
        ...action.event,
        fullFetch: true
      }
    case FETCH_EVENT_SUCCESS:
      return {
        ...action.event,
        fullFetch: true
      };
    default:
      return state;
  }
}

export default event;
