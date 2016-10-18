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
        className="form-group image-uploader">
        <label>
          Images
          {
            files.length < maxFiles ?
            <button
              className='file-add-button btn btn-success btn-empty btn-square'
              onClick={() => this.dropzone.open() }
              style={{ marginLeft: 10 }}
              type='button'>
              <i className='glyphicon glyphicon-plus'/>
            </button> :
            <div style={{ display: 'inline-block' }} className='max-files-placeholder'>
              Limit reached
            </div>
          }
        </label>
        <div
          className='images-container'>
          {
            files.length === 0 &&
            <div className='no-image-placeholder'>NO IMAGE</div>
          }
          {
            files.map(file => {
              return (
                <div
                  className='image-container'
                  key={file.preview || file.public_id}>
                  <RemovableImage file={file} maxWidth={100} maxHeight={100} onRemove={onRemove} />
                </div>
              )
            })
          }

          <Dropzone
            ref={ node => this.dropzone = node }
            onDrop={(files) => {
              if (files.length < maxFiles) {
                onDrop(files);
              }
            }}
            className='image-dropzone'
            activeClassName='active-image-dropzone'
            maxSize={300000}
            accept={mimeType}>
          </Dropzone>
        </div>
      </div>
    );
  }
}
