import { combineReducers } from 'redux';
import events from './events';
import user from './user';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  events,
  user,
  routing
});

export default rootReducer;
