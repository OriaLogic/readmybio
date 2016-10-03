import React, { PropTypes } from 'react';
import { generateCategoryColorClass } from '../../helpers/Colors';

const EventBoxImageShower = ({ category }) => {
  if (!category || !category.image_urls) {
    return (
      <div
        className={
          'image-shower ' +
          generateCategoryColorClass(category ? category.color_code : 0)
        }
      >
      <span className='no-image-placeholder'>No image</span>
      </div>
    );
  }
}

EventBoxImageShower.propTypes = {
  category: PropTypes.object
};

export default EventBoxImageShower;
