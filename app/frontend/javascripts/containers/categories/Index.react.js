import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CategoriesIndexComponent from '../../components/categories/Index.react';

const mapStateToProps = ({ users, categories }) => {
  return {
    categories: categories[users.displayedUserId]
  };
}

export default connect(mapStateToProps)(CategoriesIndexComponent);
