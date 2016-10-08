import React, { PropTypes } from 'react';
import { generateCategoryColorClass } from '../../helpers/Colors';
import { keys } from 'lodash';
import { buildCloudinaryUrl, SCALED_280_210 } from '../../constants/cloudinary';

const EventBoxImageShower = ({ event, category }) => {
  let firstImageId, firstImage;
  if (event.images && keys(event.images).length > 0) {
    firstImageId = keys(event.images)[0];
    firstImage = event.images[firstImageId];
  }

  if (firstImage) {
    return (
      <img
        src={buildCloudinaryUrl(firstImageId, SCALED_280_210)}
        alt={firstImage.name}
        className={
          'img-responsive img-thumbnail ' +
          generateCategoryColorClass(category ? category.color_code : 0)
        }
      />
    );
  } else {
    return (
      <div
        className={
          'image-shower ' +
          generateCategoryColorClass(category ? category.color_code : 0)
        }
      >
        <span className='no-image-placeholder'>
          No image
        </span>
      </div>
    );
  }
}

EventBoxImageShower.propTypes = {
  category: PropTypes.object
};

export default EventBoxImageShower;
