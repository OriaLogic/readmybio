import React from 'react';
import { Link } from 'react-router';
import ProfileDropdown from '../../containers/layout/ProfileDropdown.react';
import { UserPath, FriendsPath } from '../../helpers/Routes';
import NavLink from '../links/NavLink.react';
import Logo from './Logo.react';

class TopNav extends React.Component {
  render () {
    return (
      <nav
        className="navbar navbar-default navbar-fixed-top"
        id='top-nav'>
        <div
          className="container-fluid"
          style={{ position: 'relative' }}>

          <ul
            className='nav navbar-nav'>
            <li><NavLink to={UserPath()}>My bio</NavLink></li>
          </ul>

          <div
            style={{ position: 'absolute', left: 'calc(50% - 45px)', top: 0 }}
            className='clearfix'>
            <Link
              to="/">
              <Logo size={70} />
            </Link>
          </div>

          <ul
            className='nav navbar-nav navbar-right'>
            <li><NavLink to={FriendsPath()}>Friends</NavLink></li>
            <ProfileDropdown />
          </ul>

        </div>
      </nav>
    );
  }
}

export default TopNav;
