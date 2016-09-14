import React, { PropTypes } from 'react';
import { UserCategoriesPath, FriendsPath } from '../../helpers/Routes';
import NavLink from '../links/NavLink.react';

export default () => {
  return (
    <div
      className='col-md-2'
      style={{ height: '100%' }}>
      <ul
        className='nav nav-pills nav-stacked'
        id='sidebar'>
        <li><NavLink to={UserCategoriesPath()}>My bio</NavLink></li>
        <li><NavLink to={FriendsPath()}>Friends</NavLink></li>
      </ul>
    </div>
  )
}
