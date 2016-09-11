import { combineReducers } from 'redux';
import events from './events';
import users from './users';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  events,
  users,
  routing
});

export default rootReducer;
