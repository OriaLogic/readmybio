import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'
import store, { syncedHistory } from './store';
import { Provider } from 'react-redux';

import App from './containers/App.react';
import Profile from './components/Profile.react';
import EventCreator from './components/events/Creator.react';
import EventsIndex from './containers/events/Index.react';
import Event from './containers/events/Event.react';

render(
  <Provider store={store}>
    <Router history={syncedHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={EventsIndex} />
        <Route path="events/new" component={EventCreator} />
        <Route path="events" component={EventsIndex} />
        <Route path=":eventId" component={Event} />

        <Route path="users/:userId/events">
          <IndexRoute component={EventsIndex} />
          <Route path=":eventId" component={Event} />
        </Route>

        <Route path="profile" component={Profile} />

        <Redirect from='*' to='/' />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
