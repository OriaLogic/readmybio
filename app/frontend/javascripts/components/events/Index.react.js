import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { NewUserEventPath } from '../../helpers/Routes';
import EventBox from './EventBox.react';
import EventLoadingPlaceholder from './EventLoadingPlaceholder.react';
import NoEventPlaceholder from './NoEventPlaceholder.react';
import { keys } from 'lodash';

const EventsIndexComponent = ({ categories, canEdit, events, loading, params }) => {
  if (loading) return <EventLoadingPlaceholder />

  if (keys(events).length === 0) return <NoEventPlaceholder />

  // If not loading and eventsList is not empty
  return (
    <div
      style={{ position: 'relative' }}
      className='row events-list'>

      {
        keys(events).map(eventId => {
          const e = events[eventId];

          return (
            <EventBox
              event={e}
              key={e.id}
              canEdit={canEdit}
              params={params}
              categories={categories}
            />
          );
        })
      }
    </div>
  );
}

EventsIndexComponent.propTypes = {
  canEdit: PropTypes.bool.isRequired,
  events: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  categories: PropTypes.object.isRequired
}

export default EventsIndexComponent;
