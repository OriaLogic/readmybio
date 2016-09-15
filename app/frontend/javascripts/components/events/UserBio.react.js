import React, { Component, PropTypes } from 'react';
import PresentationalUserImage from '../users/PresentationalImage.react';
import { NewEventPath } from '../../helpers/Routes';
import { Link } from 'react-router';

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

        {
          isCurrentUser &&
          <div className='pull-right'>
            <Link
              to={NewEventPath()}>
              Create event
            </Link>
          </div>
        }
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
