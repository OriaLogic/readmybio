import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect, IndexRedirect } from 'react-router'
import store, { syncedHistory } from './store';
import { Provider } from 'react-redux';

import App from './containers/App.react';
import Profile from './containers/profile/Edit.react';
import EventCreator from './containers/events/Creator.react';
import EventsIndex from './containers/events/Index.react';
import CategoriesIndex from './containers/categories/Index.react';
import Event from './containers/events/Event.react';
import EventEdit from './containers/events/Edit.react';
import FriendsIndex from './containers/friends/Index.react';

render(
  <Provider store={store}>
    <Router history={syncedHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='users/me/categories' />

        <Route path='users/:userId'>
          <Route path='categories' component={CategoriesIndex}>
            <Route path=':categorieId'>
              <Route path="events" component={EventsIndex} />
            </Route>
          </Route>

          <Route path="events">
            <Route path="new" component={EventCreator} />
            <Route path=":eventId" component={Event} />
            <Route path=":eventId/edit" component={EventEdit} />
          </Route>
        </Route>

        <Route path="profile" component={Profile} />
        <Route path="friends" component={FriendsIndex} />
        <Redirect from='*' to='/users/me/categories' />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
