import React from 'react';
import { Link } from 'react-router';
import ProfileDropdown from '../../containers/layout/ProfileDropdown.react';
import { UserPath, FriendsPath } from '../../helpers/Routes';
import NavLink from '../links/NavLink.react';

class TopNav extends React.Component {
  render () {
    return (
      <nav
        className="navbar navbar-default navbar-fixed-top">
        <div
          className="container-fluid">

          <ul
            className='nav navbar-nav'>
            <li><NavLink to={UserPath()}>My bio</NavLink></li>
          </ul>


          <Link
            to="/"
            className='navbar-brand'>
            <img
              alt="Brand"
              src={require('../../../images/logo.png')}
              width={20}
              height={20}
            />
          </Link>

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
