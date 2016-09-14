import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { UserCategorieEventsPath } from '../../helpers/Routes';

const Category = ({ userId, name, id, eventsCount }) => {
  return (
    <div
      className='col-md-3'>
      <Link
        to={UserCategorieEventsPath(userId, id)}>
        <div className='category'>
          <h3>{name}</h3>
          <p>Events: {eventsCount}</p>
        </div>
      </Link>
    </div>
  )
}

export default Category;
