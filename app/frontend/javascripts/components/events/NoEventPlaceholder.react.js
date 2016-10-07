import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { NewUserEventPath } from '../../helpers/Routes';

export default ({ canEdit }) => {
  return (
    <div
      className='event-loading-placeholder'>
      <h3 className='text-muted' style={{ marginTop: 10 }}>
        No event
      </h3>

      {
        canEdit &&
        <Link
          className='btn btn-default btn-lg'
          to={NewUserEventPath()}>
          Create an event
        </Link>
      }
    </div>
  )
}
