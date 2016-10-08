import React, { PropTypes } from 'react';
import { UserEventsPath, UserCategoriesPath } from '../../helpers/Routes';
import NavLink from '../links/NavLink.react';

const IndexNav = () => {
  return (
    <div>
      <ul className="nav nav-pills" id='user-bio-nav'>
        <li role="presentation">
          <NavLink to={UserEventsPath()}><h4>Events</h4></NavLink>
        </li>
        <li role="presentation">
          <NavLink to={UserCategoriesPath()}><h4>Themes</h4></NavLink>
        </li>
      </ul>
    </div>
  );
}

IndexNav.propTypes = {};

export default IndexNav;
