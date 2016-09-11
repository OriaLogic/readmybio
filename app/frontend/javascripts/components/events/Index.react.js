import React from 'react';
import { Link } from 'react-router';
import { NewEventPath } from '../../helpers/Routes';

class EventsIndex extends React.Component {
  render () {
    return (
      <div
        style={{ position: 'relative' }}>
        <h1>
          EventsIndex alright?
        </h1>

        <Link
          className='btn btn-default'
          style={{ position: 'absolute', right: 0, top: 3 }}
          to={NewEventPath()}>
          New Event
        </Link>
      </div>
    );
  }
}

export default EventsIndex;
