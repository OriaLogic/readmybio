import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CategoriesIndexComponent from '../../components/categories/Index.react';

const mapStateToProps = ({ users, categories }) => {
  const { list, displayedUserId, currentUserId } = users;
  return {
    categories: categories[displayedUserId],
    totalEventsCount: list[displayedUserId].eventsCount,
    userId: (displayedUserId === currentUserId ? 'me' : displayedUserId)
  };
}

export default connect(mapStateToProps)(CategoriesIndexComponent);
