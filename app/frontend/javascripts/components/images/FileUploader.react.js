import Dropzone from 'react-dropzone';
import React, { Component, PropTypes } from 'react';
import RemovableImage from './RemovableImage.react';

export default class FileUploader extends Component {
  static propTypes = {
    files: PropTypes.array.isRequired,
    onDrop: PropTypes.func.isRequired,
    maxFiles: PropTypes.number,
    mimeType: PropTypes.string.isRequired,
    maxSize: PropTypes.number,
    onRemove: PropTypes.func.isRequired
  }

  static defaultProps = {
    maxFiles: 6,
    maxSize: 500000
  }

  onOpenClick = () => {
    this.refs.dropzone.open();
  }

  render = () => {
    const { files, onDrop, maxFiles, mimeType, onRemove } = this.props;

    return (
      <div
        style={{ display: 'inline-block' }}
        className="form-group image-uploader">
        <label>
          Images
        </label>
        <div>
          {
            files.map(file => {
              return (
                <div
                  className='image-container'
                  key={file.preview}>
                  <RemovableImage file={file} maxWidth={100} maxHeight={100} onRemove={onRemove} />
                </div>
              )
            })
          }

          {
            files.length < maxFiles ?
              <Dropzone
                ref="dropzone"
                onDrop={onDrop}
                className='image-dropzone'
                activeClassName='active-image-dropzone'
                maxSize={300000}
                accept={mimeType}>
                <div>Drop image or click</div>
              </Dropzone> :
              <div className='max-files-placeholder'>
                Limit reached
              </div>
          }
        </div>
      </div>
    );
  }
}
