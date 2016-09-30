import React, { Component, PropTypes } from 'react';
import { EditUserEventPath, UserEventPath } from '../../helpers/Routes';
import { Link } from 'react-router';

const EventBox = ({ event: ev, canEdit, params }) => {
  const { userId, categoryId } = params;

  return (
    <div className='col-md-3'>
      <div className='event-box'>
        <h5
          className='title text-info'>
          {ev.title.capitalize()}
        </h5>

        <div className='actions'>
          <Link
            to={UserEventPath(userId, ev.id)}
            style={{ marginRight: 7 }}>
            <i className='glyphicon glyphicon-eye-open' />
          </Link>

          {
            canEdit &&
            <span>
              <Link
                to={EditUserEventPath(userId, ev.id)}
                style={{ marginRight: 7 }}>
                <i className='glyphicon glyphicon-pencil' />
              </Link>

              <a href='#'>
                <i className='glyphicon glyphicon-remove' />
              </a>
            </span>
          }
        </div>

        <p className='quick-description'>{ev.quick_description}</p>
      </div>
    </div>
  );
}

EventBox.propTypes = {
  canEdit: PropTypes.bool.isRequired,
  event: PropTypes.object.isRequired
}

export default EventBox;
