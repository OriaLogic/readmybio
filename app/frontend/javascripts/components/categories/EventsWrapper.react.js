import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { UserCategoriesPath } from '../../helpers/Routes';

const EventsWrapper = ({ category, params, children }) => {
  return (
    <div
      className='events-wrapper'>
      <div className='header'>
        <h3 style={{ margin: 0 }}>
          <Link
            to={UserCategoriesPath(params.userId)}>
            Themes
          </Link>
          {' < '}
          {category.name}
        </h3>
      </div>
      <div className='list-wrapper'>
        {children}
      </div>
    </div>
  )
}

EventsWrapper.propTypes = {
  category: PropTypes.object.isRequired
};

export default EventsWrapper;
