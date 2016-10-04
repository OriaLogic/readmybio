import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { NewUserEventPath } from '../../helpers/Routes';
import EventBox from './EventBox.react';
import EventLoadingPlaceholder from './EventLoadingPlaceholder.react';
import NoEventPlaceholder from './NoEventPlaceholder.react';
import { keys } from 'lodash';
import IndexNav from './IndexNav.react';
import IndexSearch from '../../containers/events/IndexSearch.react';

const EventsIndexComponent = ({
  filter, categories, canEdit, events, loading, params,
  setFilterTitle, setFilterTag, setFilterStartDate, setFilterEndDate
}) => {

  let content;

  if (loading) {
    content = <EventLoadingPlaceholder />
  } else if (keys(events).length === 0) {
    content = <NoEventPlaceholder />
  } else {
    content = keys(events).map(eventId => {
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
    });
  }


  // If not loading and eventsList is not empty
  return (
    <div className='events-index'>
      <IndexNav/>

      <div className='pull-right' style={{ paddingTop: 8 }}>
        <IndexSearch />
      </div>

      <div
        style={{ position: 'relative' }}
        className='row events-list'>
        {content}
      </div>
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
