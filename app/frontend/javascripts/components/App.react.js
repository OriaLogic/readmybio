import React from 'react';
import TopNav from './layout/TopNav.react';

class App extends React.Component {
  render () {
    return (
      <div>
        <TopNav />

        <div
          className='container-fluid'
          id='app-main-container'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
