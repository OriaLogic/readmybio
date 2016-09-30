import Empty from './helpers/String';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect, IndexRedirect } from 'react-router'
import store, { syncedHistory } from './store';
import { Provider } from 'react-redux';

import App from './components/App.react';
import Onboarding from './containers/Onboarding.react';
import Profile from './containers/profile/Edit.react';
import EventCreator from './containers/events/Creator.react';
import EventsIndex from './containers/events/Index.react';
import CategoriesIndex from './containers/categories/Index.react';
import Event from './containers/events/Event.react';
import EventEdit from './containers/events/Edit.react';
import FriendsIndex from './containers/friends/Index.react';
import UserBio from './containers/users/UserBio.react';
import CategoryEventsWrapper from './containers/categories/EventsWrapper.react';

import { fetchUser, fetchUserData } from './actions/users';
import { fetchEvent } from './actions/events';

const fetchCurrentUserIfNeeded = (n, replace, callback) => {
  if (store.getState().users && store.getState().users.currentUserId) {
    callback();
  } else {
    store.dispatch(fetchUser())
    .then((user) => {
      if (!user.is_onboarded) {
        replace('/onboarding');
      }

      callback();
    });
  }
}

const fetchUserDataAndTransition = (nextState, replace, callback) => {
  let { userId } = nextState.params;
  const currentUserId = store.getState().users.currentUserId;
  userId = userId === 'me' ? currentUserId : userId;

  store.dispatch(fetchUserData(userId))
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
      <Route path='/onboarding' component={Onboarding} onEnter={fetchCurrentUserIfNeeded}/>

      <Route path='/' component={App} onEnter={fetchCurrentUserIfNeeded}>
        <IndexRedirect to='users/me/events' />

        <Route path='users/:userId' onEnter={fetchUserDataAndTransition} component={UserBio}>
          <Route path='categories' component={CategoriesIndex} />

          <Route path="events">
            <IndexRoute component={EventsIndex} />
            <Route path="new" component={EventCreator} onEnter={ensureDisplayUserIsCurrentUser} />
            <Route path=":eventId" onEnter={fetchEventAndTransition}>
              <IndexRoute component={Event} />
              <Route path="edit" component={EventEdit} onEnter={ensureDisplayUserIsCurrentUser} />
            </Route>
          </Route>

          <IndexRedirect to='users/me/events' />
        </Route>

        <Route path="profile" component={Profile} />
        <Route path="friends" component={FriendsIndex} />
        <Redirect from='*' to='/users/me/categories' />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
