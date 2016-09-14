import React, { PropTypes } from 'react';
import Category from './Category.react';
import { forEach, keys } from 'lodash';



const Index = ({ userId, categories, totalEventsCount }) => {
  const cats = keys(categories).map(categoryId => {
    let cat = categories[categoryId];

    return (
      <Category
        name={cat.name}
        id={categoryId}
        eventsCount={cat.eventsCount}
        key={categoryId}
        userId={userId}
      />
    );
  })

  cats.unshift(
    <Category
      name='all'
      eventsCount={totalEventsCount}
      id='all'
      key='all'
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
