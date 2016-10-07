import React, { PropTypes } from 'react';
import GoodSizeImage from './GoodSizeImage.react';

const RemovableImage = ({ onRemove, file }) => {
  return (
    <div
      className='removable-image'>
      <span className='remove-span'>
        <a href='#' onClick={(e) => { e.preventDefault(); onRemove(file.preview) }}>
          <i className='glyphicon glyphicon-remove'/>
        </a>
      </span>
      <GoodSizeImage file={file} maxWidth={100} maxHeight={100} />
    </div>
  )
}

RemovableImage.propTypes = {
  onRemove: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired
};

export default RemovableImage;
