import React, { PropTypes } from 'react';
import Loader from '../loaders/Loader.react';

export default ({ userLoading, children }) => {
  return (
    <div
      className='col-md-10'>
      <Loader loading={userLoading} />

      {
        !userLoading &&
        children
      }
    </div>
  )
}
