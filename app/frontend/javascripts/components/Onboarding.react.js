import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { syncedHistory } from '../store';

const Onboarding = ({ validateOnboarding }) => {
  return (
    <div className='onboarding'>
      <img
        alt="Brand"
        src={require('../../images/logo.png')}
        width={50}
        height={50}
      />

    <h2>Welcome to Readmybio!</h2>
      <p>
        You do not have any story yet to share with your friends
        <br/>
        Let us start by creating your first story!
      </p>

      <div className='actions'>
        <button
          className='btn btn-lg btn-success'
          onClick={() => {
            validateOnboarding().then(() => {
              syncedHistory.push('/users/me/events/new');
            })
          }}>
          Create my first story
        </button>
      </div>
    </div>
  )
}

Onboarding.propTypes = {
  validateOnboarding: PropTypes.func.isRequired
};

export default Onboarding;
