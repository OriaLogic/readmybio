import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { UserEventsPath } from '../../helpers/Routes';
export const ALL_CATEGORY_ID = 'all';

const Category = ({ userId, name, id, eventsCount }) => {
  return (
    <div
      className='col-md-3'>
      <Link
        to={UserEventsPath(userId, id)}
        className='category'
        id={id === ALL_CATEGORY_ID ? ALL_CATEGORY_ID : null}>
        <div className='category-container'>
          <h4>{name}</h4>
          <p>Events: {eventsCount}</p>
        </div>
      </Link>
    </div>
  )
}

export default Category;
