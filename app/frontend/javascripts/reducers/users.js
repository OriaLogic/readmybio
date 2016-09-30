import {
  FETCH_USER_SUCCESS,
  FETCH_DATA_SUCCESS,
  CREATE_EVENT_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  list: {},
  currentUserId: null,
  displayedUserId: null
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          [action.user.id]: action.user
        },
        currentUserId: action.user.id
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          [action.user.id]: {
            ...action.user,
            eventsCount: action.events.length
          }
        },
        displayedUserId: action.user.id
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          [state.currentUserId]: {
            ...state.list[state.currentUserId],
            eventsCount: (state.list[state.currentUserId].eventsCount + 1)
          }
        }
      }
    default:
      return state;
  }
}

export default users;
