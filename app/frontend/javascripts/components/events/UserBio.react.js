import React, { Component, PropTypes } from 'react';
import PresentationalUserImage from '../users/PresentationalImage.react';

const UserBioComponent = ({ displayedUser, nbEvents, children }) => {
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
  nbEvents: PropTypes.number.isRequired
};

export default UserBioComponent;
