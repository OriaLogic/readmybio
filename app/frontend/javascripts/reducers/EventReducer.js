import { Map as ImmutableMap } from 'immutable';

function eventReducer(state = ImmutableMap(), action) {
  switch (action.type) {
    case 'NEW_EVENT':
      return state
    default:
      return state
  }
}
