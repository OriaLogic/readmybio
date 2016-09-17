import React, { Component, PropTypes } from 'react';
import { EditUserEventPath, UserEventPath } from '../../helpers/Routes';
import { Link } from 'react-router';

const EventRow = ({ event: ev, canEdit, params }) => {
  const { userId, categoryId } = params;

  return (
    <div className='event-row'>
      <Link to={UserEventPath(userId, ev.id, categoryId)}>
        <div className='event-row-container'>
          <h2 style={{ margin: 0, marginBottom: 15 }}>
            {ev.title}
          </h2>
          <p style={{ margin: 0 }}>{ev.description}</p>
        </div>
      </Link>

      {
        canEdit &&
        <div className='actions'>
          <Link
            to={EditUserEventPath(userId, ev.id)}
            onClick={e => e.stopPropagation()}
            style={{ marginRight: 10 }}>
            Edit
          </Link>

          <a
            onClick={
              e => e.stopPropagation()
            }>
            <i className='glyphicon glyphicon-remove' />
          </a>
        </div>
      }
    </div>
  );
}

EventRow.propTypes = {
  canEdit: PropTypes.bool.isRequired,
  event: PropTypes.object.isRequired
}

export default EventRow;
