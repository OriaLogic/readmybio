import {
  CREATE_EVENT, CREATE_EVENT_SUCCESS,
  DELETE_EVENT, DELETE_EVENT_SUCCESS,
  EDIT_EVENT,
  UPDATE_EVENT, UPDATE_EVENT_SUCCESS
} from '../constants/actionTypes';

const initialState = {};

const event = (state = initialState, action) {
  switch (action.type) {
    case CREATE_EVENT:

    case CREATE_EVENT_SUCCESS:
    default:
      return state;
  }
}

export default event;
