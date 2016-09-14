import { combineReducers } from 'redux';
import events from './events';
import users from './users';
import categories from './categories';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  events,
  users,
  categories,
  routing
});

export default rootReducer;
