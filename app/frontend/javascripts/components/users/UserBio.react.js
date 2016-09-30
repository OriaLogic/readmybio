import React, { Component, PropTypes } from 'react';
import PresentationalUserImage from './PresentationalImage.react';
import { NewUserEventPath, UserEventsPath, UserCategoriesPath } from '../../helpers/Routes';
import { Link } from 'react-router';
import NavLink from '../links/NavLink.react';

const UserBioComponent = ({ displayedUser, nbEvents, isCurrentUser, children }) => {
  return (
    <div className='user-bio-section'>
      <div
        className='user-presentation'>

        <div
          style={{ display: 'inline-block', verticalAlign: 'middle' }}>
          <PresentationalUserImage
            user={displayedUser}
            size={60}
          />
        </div>

        <div
          style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 30 }}>
          <h3
            style={{ marginTop: 7 }}>
            {displayedUser.email}
            <br/>
            <small>Events: {nbEvents}</small>
          </h3>

        </div>

          <div className='pull-right additional-actions'>
            <div>
              {
                isCurrentUser &&
                <Link
                  to={NewUserEventPath()}
                  className='btn btn-default'>
                  Create event
                </Link>
              }
            </div>

            <div>
              <ul className="nav nav-pills nav-light">
                <li role="presentation">
                  <NavLink to={UserEventsPath()}>All</NavLink>
                </li>
                <li role="presentation">
                  <NavLink to={UserCategoriesPath()}>Categories</NavLink>
                </li>
              </ul>
            </div>
          </div>
      </div>

      <div
        className='bio-section'>
        { children }
      </div>
    </div>
  )
}

UserBioComponent.propTypes = {
  displayedUser: PropTypes.object.isRequired,
  nbEvents: PropTypes.number.isRequired,
  isCurrentUser: PropTypes.bool.isRequired
};

export default UserBioComponent;
