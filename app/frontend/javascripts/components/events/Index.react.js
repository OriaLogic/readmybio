import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { NewEventPath } from '../../helpers/Routes';

class EventsIndexComponent extends Component {
  static propTypes = {
    canEdit: PropTypes.bool.isRequired,
    events: PropTypes.array.isRequired
  }

  render () {
    const { events, canEdit } = this.props;

    return (
      <div
        style={{ position: 'relative' }}>
        <h1>
          EventsIndex alright?
        </h1>

        {
          canEdit &&
          <Link
            className='btn btn-default'
            style={{ position: 'absolute', right: 0, top: 3 }}
            to={NewEventPath()}>
            New Event
          </Link>
        }

        {
          events.length === 0 &&
          <h3 className='text-muted'>No event yet</h3>
        }

        {
          events.length > 0 &&
          events.map(event => {
            return (
              <div>{event.title}</div>
            );
          })
        }
      </div>
    );
  }
}

export default EventsIndexComponent;
