import React, { PropTypes } from 'react';
import Category, { ALL_CATEGORY_ID } from './Category.react';
import { forEach, keys } from 'lodash';
import IndexNav from '../events/IndexNav.react';

const Index = ({ userId, categories, totalEventsCount }) => {
  const cats = keys(categories).map(categoryId => {
    let cat = categories[categoryId];

    return (
      <Category
        category={cat}
        key={categoryId}
        userId={userId}
      />
    );
  })

  return (
    <div>
      <IndexNav/>

      <div className='categories-index'>
        <div className='categories-list'>
          <div
            className='row'>
            {
              keys(categories).length &&
              cats
            }
          </div>
        </div>
      </div>

    </div>
  )
}

Index.propTypes = {
  categories: PropTypes.object.isRequired,
  totalEventsCount: PropTypes.number.isRequired
}

export default Index;
