import React, { PropTypes } from 'react';
import { UserEventsPath, UserCategoriesPath } from '../../helpers/Routes';
import NavLink from '../links/NavLink.react';

const IndexNav = () => {
  return (
    <ul className="nav nav-pills nav-light">
      <li role="presentation">
        <NavLink to={UserEventsPath()}><h4>Events</h4></NavLink>
      </li>
      <li role="presentation">
        <NavLink to={UserCategoriesPath()}><h4>Themes</h4></NavLink>
      </li>
    </ul>
  );
}

IndexNav.propTypes = {};

export default IndexNav;
