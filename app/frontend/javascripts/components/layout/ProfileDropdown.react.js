import React, { PropTypes } from 'react';
import NavbarDropdown from '../dropdowns/NavbarDropdown.react';

const ProfileDropdown = ({ user, logout }) => (
  <ul
    className="nav navbar-nav navbar-right">
    <NavbarDropdown
      externalLinkContent={(
        <span>
          <i
            className='glyphicon glyphicon-user'
          />
          {' '}
          {user && user.email ? user.email : 'Profile'}
          {' '}
          <span className="caret" />
        </span>
      )}>
      <li>
        <a
          data-method='delete'
          href='#'
          onClick={e => {
            e.preventDefault();
            logout();
          }}>
          Log out
        </a>
      </li>
    </NavbarDropdown>
  </ul>
);

export default ProfileDropdown;
