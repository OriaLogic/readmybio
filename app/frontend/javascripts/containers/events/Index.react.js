import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import EventIndexComponent from '../../components/events/Index.react';
import { setFilter } from '../../actions/events';
import { keys } from 'lodash';
import { createSelector } from 'reselect'
import moment from 'moment';

const getVisibilityFilter = ({ events }) => events.filter;
const getEvents = ({ events, users }) => events[users.displayedUserId];

const filterEvents = createSelector(
  [getVisibilityFilter, getEvents],
  ({ title, tagId, startDate, endDate }, events) => {
    const toDisplayEvents = {};

    keys(events).forEach((eventId) => {
      const event = events[eventId];

      if (title && title.length > 3 && !(event.title.toLowerCase().indexOf(title.toLowerCase()) > -1)) {
        return;
      } else if (tagId && !(event.tag_ids.indexOf(tagId) > -1)) {
        return;
      } else if (startDate && moment(event.event_date).isBefore(startDate)) {
        return;
      } else if (endDate && moment(event.event_date).isAfter(endDate)) {
        return;
      } else {
        toDisplayEvents[eventId] = event;
      };
    });

    return toDisplayEvents;
  }
);

const mapStateToProps = (state) => {
  const { events, users, categories } = state;
  const { loading } = events;

  return {
    events: filterEvents(state),
    loading: loading,
    canEdit: (users.currentUserId === users.displayedUserId),
    categories: categories[users.displayedUserId]
  }
}

export default connect(
  mapStateToProps,
)(EventIndexComponent);
