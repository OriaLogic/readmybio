import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { NewEventPath } from '../../helpers/Routes';

export default ({ canEdit }) => {
  return (
    <div
      className='event-loading-placeholder'>
      <h3 className='text-muted'>
        No event yet
      </h3>

      {
        canEdit &&
        <Link
          className='btn btn-default btn-lg'
          to={NewEventPath()}>
          Create an event
        </Link>
      }
    </div>
  )
}
