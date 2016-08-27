import React from 'react';
import { Link } from 'react-router';
import RouteHelper from '../../helpers/Route';

console.log(RouteHelper, RouteHelper.NewEventPath())

class EventsIndex extends React.Component {
  render () {
    return (
      <div
        style={{ position: 'relative' }}>
        <h1>
          EventsIndex
        </h1>

        <Link
          className='btn btn-default'
          style={{ position: 'absolute', right: 0, top: 3 }}
          to={RouteHelper.NewEventPath()}>
          New Event
        </Link>
      </div>
    );
  }
}

export default EventsIndex;
