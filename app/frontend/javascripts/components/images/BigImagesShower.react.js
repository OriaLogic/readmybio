import React, { Component, PropTypes } from 'react';

export default class BigImagesShower extends Component {
  render () {
    return (
      <div
        className='big-images-displayer'>
        <div className='backdrop'></div>
        <div className='first-wrapper'>
          <div className='second-wrapper'>
            <a href='#' className='close'></a>
            <div className='images-navigator'>
              <a
                href='#'
                onClick={}
                className='previous-link'>
                <i className='glyphicon glyphicon-chevron-left'/>
              </a>
              <a
                href='#'
                onClick={}
                className='next-link'>
                <i className='glyphicon glyphicon-chevron-right'/>
              </a>

              <div className='image-wrapper'>
                <img />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
