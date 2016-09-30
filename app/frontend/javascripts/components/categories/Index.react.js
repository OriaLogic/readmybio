import React, { PropTypes } from 'react';
import Category, { ALL_CATEGORY_ID } from './Category.react';
import { forEach, keys } from 'lodash';

const Index = ({ userId, categories, totalEventsCount }) => {
  const cats = keys(categories).map(categoryId => {
    let cat = categories[categoryId];

    return (
      <Category
        name={cat.name}
        id={categoryId}
        eventsCount={cat.event_ids.length}
        key={categoryId}
        userId={userId}
      />
    );
  })

  cats.unshift(
    <Category
      name={ALL_CATEGORY_ID}
      eventsCount={totalEventsCount}
      id={ALL_CATEGORY_ID}
      key={ALL_CATEGORY_ID}
      userId={userId}
    />
  );

  return (
    <div>
      <h2 className='text-muted'>
        Themes
      </h2>

      <div
        className='row'>
        {
          keys(categories).length &&
          cats
        }
      </div>

    </div>
  )
}

Index.propTypes = {
  categories: PropTypes.object.isRequired,
  totalEventsCount: PropTypes.number.isRequired
}

export default Index;
