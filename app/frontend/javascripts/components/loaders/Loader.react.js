import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const Loader = ({ loading }) => {
  const loaderClass = classnames('loader', {
    loading: loading
  });

  return <div className={loaderClass} />
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Loader;
