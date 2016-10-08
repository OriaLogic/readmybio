import React, { PropTypes } from 'react';
import { generateCategoryColorClass } from '../../helpers/Colors';

const EventBoxTagShower = ({ category }) => {
  return (
    <span
      className={
        'badge badge-square ' +
        generateCategoryColorClass(category ? category.color_code : 0)
      }
    >
      {category.name}
    </span>
  );
}

EventBoxTagShower.propTypes = {
  category: PropTypes.object.isRequired
};

export default EventBoxTagShower;
