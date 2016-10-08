import React, { PropTypes } from 'react';
import NavbarDropdown from '../dropdowns/NavbarDropdown.react';

const ProfileDropdown = ({ currentUser, logout }) => (
<NavbarDropdown
    externalLinkContent={(
      <span>
        {' '}
        {currentUser && currentUser.email ? currentUser.email : 'Profile'}
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
);

ProfileDropdown.propTypes = {
  currentUser: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
}

export default ProfileDropdown;
