import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <Link {...props} activeClassName='active' />
  )
}
