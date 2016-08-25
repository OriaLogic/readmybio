import setup from './vendor/jquery-ujs';
setup(jQuery);

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'

import App from './components/App.react';
import Profile from './components/Profile.react';
import EventCreator from './components/events/Creator.react';
import EventsIndex from './components/events/Index.react';

render((
  <Router history={browserHistory}>
    <Route component={App} path='/'>
      <IndexRedirect to='/events' />
      <Route component={EventCreator} path="events/new" />
      <Route component={EventsIndex} path="events" />
      <Route component={Profile} path="profile" />
    </Route>
  </Router>
), document.getElementById('root'))
