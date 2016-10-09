import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CategoriesIndexComponent from '../../components/categories/Index.react';
import { setFilter } from '../../actions/events';

const mapStateToProps = ({ users, categories }) => {
  const { list, displayedUserId, currentUserId } = users;
  return {
    categories: categories[displayedUserId],
    totalEventsCount: list[displayedUserId].eventsCount,
    userId: displayedUserId,
    isCurrentUser: (displayedUserId === currentUserId)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setFilterTag: (userId, tagId) => { dispatch(setFilter(userId, tagId, 'tagId')) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesIndexComponent);
