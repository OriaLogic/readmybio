import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'
import store, { syncedHistory } from './store';
import { Provider } from 'react-redux';

import App from './containers/App.react';
import Profile from './components/Profile.react';
import EventCreator from './components/events/Creator.react';
import EventsIndex from './components/events/Index.react';

render(
  <Provider store={store}>
    <Router history={syncedHistory}>
      <Route component={App} path='/'>
        <IndexRoute component={EventsIndex} />
        <Route component={EventCreator} path="events/new" />
        <Route component={EventsIndex} path="events" />
        <Route component={Profile} path="profile" />
        <Redirect from='*' to='/' />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
