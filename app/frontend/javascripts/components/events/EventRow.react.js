import React, { Component, PropTypes } from 'react';
import { EditEventPath, EventPath } from '../../helpers/Routes';
import { Link } from 'react-router';

const EventRow = ({ event, canEdit }) => {
  return (
    <div>
      <h2>
        {event.title}
      </h2>
      <p>{event.description}</p>
      {
        canEdit &&
        <Link
          to={EditEventPath()}>
          Edit
        </Link>
      }
    </div>
  );
}

EventRow.propTypes = {
  canEdit: PropTypes.bool.isRequired,
  event: PropTypes.object.isRequired
}

export default EventRow;
