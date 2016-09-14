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

import { fetchUser, fetchUserCategories } from './actions/users';

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

render(
  <Provider store={store}>
    <Router history={syncedHistory}>
      <Route path='/' component={App} onEnter={fetchCurrentUser}>
        <IndexRedirect to='users/me/categories' />

        <Route path='users/:userId' onEnter={fetchUserCategoriesAndTransition}>
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
