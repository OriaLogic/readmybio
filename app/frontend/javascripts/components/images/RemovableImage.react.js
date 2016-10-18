import React, { PropTypes } from 'react';
import GoodSizeImage from './GoodSizeImage.react';
import { buildCloudinaryUrl, SCALED_100_75 } from '../../constants/cloudinary';

const RemovableImage = ({ onRemove, file }) => {
  return (
    <div
      className='removable-image'>
      <span className='remove-span'>
        <a href='#' onClick={(e) => { e.preventDefault(); onRemove(file.preview || file.public_id) }}>
          <i className='glyphicon glyphicon-remove'/>
        </a>
      </span>
      <GoodSizeImage imageSrc={file.preview || buildCloudinaryUrl(file.public_id, SCALED_100_75)} maxWidth={100} maxHeight={100} />
    </div>
  )
}

RemovableImage.propTypes = {
  onRemove: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired
};

export default RemovableImage;
