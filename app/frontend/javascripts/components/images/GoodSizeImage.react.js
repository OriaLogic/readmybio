import React, { Component, PropTypes } from 'react';

const HEIGHT = 'height';
const WIDTH = 'width';

export default class GoodSizeImage extends Component {
  static propTypes = {
    imageSrc: PropTypes.string.isRequired,
    maxWidth: PropTypes.number.isRequired,
    maxHeight: PropTypes.number.isRequired
  }

  state = {
    loaded: false
  }

  handleImageLoaded = () => {
    this.winning = this.image.height > this.image.width ? HEIGHT : WIDTH;
    this.maxDimension = Math.max(this.image.height, this.image.width);

    this.setState({
      loaded: true
    });
  }

  render () {
    const { imageSrc, maxWidth, maxHeight } = this.props;
    const { loaded } = this.state;

    return (
      <img
        ref={node => this.image = node}
        src={imageSrc}
        className='img-thumbnail'
        onLoad={this.handleImageLoaded}
        style={{
          display: (loaded ? 'block' : 'none'),
          width: (this.winning === WIDTH ? maxWidth : 'auto'),
          height: (this.winning === HEIGHT ? maxHeight : 'auto')
        }}
      />
    );
  }
}

export default GoodSizeImage;
