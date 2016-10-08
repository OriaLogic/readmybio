import React, { Component, PropTypes } from 'react';
import PresentationalUserImage from './PresentationalImage.react';
import { NewUserEventPath } from '../../helpers/Routes';
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
          <h4
            style={{ marginTop: 7 }}>
            {displayedUser.email}
          </h4>
          <p className='text-muted'>Events: {nbEvents}</p>
        </div>

          <div className='pull-right additional-actions'>
            <div>
              {
                isCurrentUser &&
                <Link
                  to={NewUserEventPath()}
                  className='btn btn-empty btn-default btn-square btn-lg'>
                  NEW EVENT
                </Link>
              }
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
