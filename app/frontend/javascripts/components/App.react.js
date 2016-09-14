import React, { Component, PropTypes } from 'react';
import TopNav from './layout/TopNav.react';
import SideBar from './layout/SideBar.react';
import MainPanel from './layout/MainPanel.react';

const AppComponent = ({ children }) => {
  return (
    <div
      style={{ height: '100%' }}>
      <TopNav />

      <div
        className='container-fluid'
        id='app-main-container'>
        <div
          className='row'
          style={{ height: '100%' }}>
          <SideBar />
          <MainPanel
            style={{ position: 'relative' }}>
            {children}
          </MainPanel>
        </div>
      </div>
    </div>
  );
}

export default AppComponent;
