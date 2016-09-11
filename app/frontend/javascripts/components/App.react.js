import React, { Component, PropTypes } from 'react';
import TopNav from './layout/TopNav.react';
import Loader from './loaders/Loader.react';

class AppComponent extends Component {
  static propTypes = {
    userLoading: PropTypes.bool.isRequired
  }

  render () {
    const { userLoading } = this.props;

    return (
      <div
        style={{ position: 'relative' }}>
        <TopNav />

        <Loader loading={userLoading} />

        {
          !userLoading &&
          <div
            className='container-fluid'
            id='app-main-container'>
            { this.props.children }
          </div>
        }
      </div>
    );
  }
}

export default AppComponent;
