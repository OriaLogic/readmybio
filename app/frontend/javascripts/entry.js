import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect, IndexRedirect } from 'react-router'
import store, { syncedHistory } from './store';
import { Provider } from 'react-redux';

import App from './components/App.react';
import Profile from './containers/profile/Edit.react';
import EventCreator from './containers/events/Creator.react';
import EventsIndex from './containers/events/Index.react';
import CategoriesIndex from './containers/categories/Index.react';
import Event from './containers/events/Event.react';
import EventEdit from './containers/events/Edit.react';
import FriendsIndex from './containers/friends/Index.react';
import UserBio from './containers/users/UserBio.react';
import CategoryEventsWrapper from './containers/categories/EventsWrapper.react';

import { fetchUser, fetchUserCategories } from './actions/users';
import { fetchEvent } from './actions/events';

const fetchCurrentUser = (n, r, callback) => store.dispatch(fetchUser()).then(() => callback());

const fetchUserCategoriesAndTransition = (nextState, replace, callback) => {
  let { userId } = nextState.params;
  const currentUserId = store.getState().users.currentUserId;
  userId = userId === 'me' ? currentUserId : userId;

  store.dispatch(fetchUserCategories(userId))
  .then(() => callback())
  .catch(error => {
    replace(`/friends`);
    // replace(`/users/${currentUserId}/categories`);
    callback();
  });
}

const fetchEventAndTransition = (nextState, replace, callback) => {
  let { userId, eventId } = nextState.params;

  store.dispatch(fetchEvent(userId, eventId))
  .then(() => callback())
  .catch(error => {
    replace(`/users/${userId}/categories`);
    // replace(`/users/${currentUserId}/categories`);
    callback();
  });
}

const ensureDisplayUserIsCurrentUser = (nextState, replace) => {
  let { userId } = nextState.params;

  if (userId !== 'me') {
    replace(`/users/${userId}/categories`);
  }
};

render(
  <Provider store={store}>
    <Router history={syncedHistory}>
      <Route path='/' component={App} onEnter={fetchCurrentUser}>
        <IndexRedirect to='users/me/categories' />

        <Route path='users/:userId' onEnter={fetchUserCategoriesAndTransition} component={UserBio}>
          <Route path='categories'>
            <IndexRoute component={CategoriesIndex} />
            <Route path=':categoryId' component={CategoryEventsWrapper}>
              <Route path="events" component={EventsIndex} />
            </Route>
          </Route>

          <Route path="events">
            <IndexRedirect to='users/me/categories/all/events' />
            <Route path="new" component={EventCreator} onEnter={ensureDisplayUserIsCurrentUser} />
            <Route path=":eventId" onEnter={fetchEventAndTransition}>
              <IndexRoute component={Event} />
              <Route path="edit" component={EventEdit} onEnter={ensureDisplayUserIsCurrentUser} />
            </Route>
          </Route>

          <IndexRedirect to='users/me/categories' />
        </Route>

        <Route path="profile" component={Profile} />
        <Route path="friends" component={FriendsIndex} />
        <Redirect from='*' to='/users/me/categories' />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
