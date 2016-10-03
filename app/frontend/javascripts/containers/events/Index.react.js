import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import EventIndexComponent from '../../components/events/Index.react';
import { fetchEventsForUserAndCategory } from '../../actions/events';

const mapStateToProps = ({ events, users, categories }, ownProps) => {
  const { loading } = events;

  return {
    events: events[users.displayedUserId],
    loading: loading,
    canEdit: (users.currentUserId === users.displayedUserId),
    categories: categories[users.displayedUserId]
  }
}

export default connect(
  mapStateToProps
)(EventIndexComponent);
