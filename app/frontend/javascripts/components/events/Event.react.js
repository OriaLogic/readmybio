import React, { PropTypes } from 'react';
import BackToList from './BackToList.react';
import { EditUserEventPath } from '../../helpers/Routes';
import { Link } from 'react-router';

const Event = ({ event, canEdit, location, params }) => {
  const fromCategory = location.query.from_category || 'all';
  const { userId, eventId } = params;

  return (
    <div
      className='event'>
      <div className='event-breadcrumb'>
        <BackToList location={location} params={params} />

        <div className='pull-right'>
          <Link to={EditUserEventPath(userId, eventId, fromCategory)}>
            <i className='glyphicon glyphicon-pencil '/>
            {' Edit'}
          </Link>
        </div>
      </div>

      <div
        className='event-container'>
        <h3 className='title'>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </div>
  )
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

export default Event;
