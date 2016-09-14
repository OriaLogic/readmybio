import React, { PropTypes } from 'react';
import PresentationalImage, { SHAPES } from '../images/PresentationalImage.react';

export default ({ user, size }) => {
  const initial = user.email[0];

  return (
    <PresentationalImage
      text={initial}
      size={size}
      shape={SHAPES.SQUARE}
    />
  );
}
