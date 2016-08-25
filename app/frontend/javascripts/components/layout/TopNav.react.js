import React from 'react';
import { Link } from 'react-router';
import NavbarDropdown from '../dropdowns/NavbarDropdown.react';

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

          <ul
            className="nav navbar-nav navbar-right">
            <NavbarDropdown
              externalLinkContent={(
                <span>
                  <i
                    className='glyphicon glyphicon-user'
                  />
                  {" Profile "}
                  <span className="caret" />
                </span>
              )}>
              <li>
                <a
                  data-method='delete'
                  href='/users/sign_out'>
                  Log out
                </a>
              </li>
            </NavbarDropdown>
          </ul>
        </div>
      </nav>
    );
  }

  logout = e => {
    $.ajax({
      method: 'delete',
      url: '/users/sign_out',
      success: () => window.location.replace("/users/sign_in")
    })
  }
}

export default TopNav;
