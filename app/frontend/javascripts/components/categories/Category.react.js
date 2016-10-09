import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { UserEventsPath } from '../../helpers/Routes';
export const ALL_CATEGORY_ID = 'all';
import { generateCategoryColorClass } from '../../helpers/Colors';

const Category = ({ userId, category }) => {
  const { color_code, name, id, event_ids } = category;
  const eventsCount = event_ids.length;

  return (
    <div
      className={'col-md-3 category ' + generateCategoryColorClass(color_code ? color_code : 0)}>
      <Link
        to={UserEventsPath(userId, id)}
        id={id === ALL_CATEGORY_ID ? ALL_CATEGORY_ID : null}>
        <div className='category-container'>
          <h5 className='title'>{name}</h5>
          <div className='seperator' />
          <p>Events: {eventsCount}</p>
        </div>
      </Link>
    </div>
  )
}

export default Category;
