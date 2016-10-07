import {
  FETCH_USER_SUCCESS,
  FETCH_DATA_SUCCESS,
  CREATE_EVENT_SUCCESS,
  SHOW_MORE_EVENTS, SET_FILTER
} from '../constants/actionTypes';

const initialState = {
  list: {},
  currentUserId: null,
  displayedUserId: null
};

const BASE_EVENTS_SHOWED = 12;

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
            eventsCount: action.events.length,
            showEventsNb: BASE_EVENTS_SHOWED
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
      };
    case SHOW_MORE_EVENTS:
      return {
        ...state,
        list: {
          ...state.list,
          [action.userId]: {
            ...state.list[action.userId],
            showEventsNb: (state.list[action.userId].showEventsNb + BASE_EVENTS_SHOWED)
          }
        }
      };
    case SET_FILTER:
      return {
        ...state,
        list: {
          ...state.list,
          [action.userId]: {
            ...state.list[action.userId],
            showEventsNb: BASE_EVENTS_SHOWED
          }
        }
      };
    default:
      return state;
  }
}

export default users;
