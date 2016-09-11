import React from 'react';
import { Link } from 'react-router';
import ProfileDropdown from '../../containers/layout/ProfileDropdown.react';

class TopNav extends React.Component {
  render () {
    return (
      <nav
        className="navbar navbar-default navbar-fixed-top">
        <div
          className="container-fluid">
          <div
            className="navbar-header">
            <Link
              className="navbar-brand"
              to="/">
              <img
                alt="Brand"
                src={require('../../../images/logo.png')}
                width={20}
                height={20}
              />
            </Link>
          </div>

          <ProfileDropdown />
        </div>
      </nav>
    );
  }
}

export default TopNav;
