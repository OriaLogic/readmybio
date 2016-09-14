import React, { PropTypes } from 'react';

export const SHAPES = {
  CIRCLE: 'circle',
  SQUARE: 'square'
};

const setBorderRadius = (shape) => {
  switch (shape) {
    case SHAPES.CIRCLE:
      return '50%';
    case SHAPES.SQUARE:
      return 4;
    default:
      return 4;
  }
};

const setFontSize = (size) => {
  switch (size) {
    case 60: return 23;
    case 50: return 20;
    case 40: return 17;
    case 30: return 14;
  }
}

export default ({ size = 30, text = '-', shape = SHAPES.CIRCLE }) => {
  const borderRadius = setBorderRadius(shape)
  const fontSize = setFontSize(size);

  return (

    <span
      className='presentational-span'
      style={{
        width: size,
        height: size,
        lineHeight: (size + 'px'),
        borderRadius: borderRadius,
        fontSize: fontSize
      }}>
      {text.toUpperCase()}
    </span>
  )
}
