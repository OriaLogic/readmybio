import React, { Component, PropTypes } from 'react';
import TopNav from './layout/TopNav.react';
import MainPanel from './layout/MainPanel.react';

const AppComponent = ({ children }) => {
  return (
    <div
      style={{ height: '100%' }}>
      <TopNav />

      <div
        className='container-fluid'
        id='app-main-container'>
        {children}
      </div>
    </div>
  );
}

export default AppComponent;
