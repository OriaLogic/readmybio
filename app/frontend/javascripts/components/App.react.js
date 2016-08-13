import React from 'react';
import Para from './Para.react';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Mon app</h1>
        <button
          className='btn btn-danger'>
          Click me
        </button>
        <button
          className='btn btn-success'>
          Click ma chatte
        </button>

        <Para />
      </div>
    );
  }
}

export default App;
