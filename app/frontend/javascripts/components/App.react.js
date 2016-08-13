import React from 'react';

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
          Click me
        </button>
        <p>Lucas</p>

        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true">
            Dropdown
            <i className='glyphicon glyphicon-plus' />
            <span className="caret" />
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenu1">
            <li>
              <a href="#">Action</a>
            </li>
            <li>
              <a href="#">
                Another action
              </a>
            </li>
            <li>
              <a href="#">
                Something else here
              </a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
