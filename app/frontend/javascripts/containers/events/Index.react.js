import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import EventIndexComponent from '../../components/events/Index.react';
import { fetchEventsForUser } from '../../actions/events';
import UserPresentation from '../../components/events/UserPresentation.react';

class EventIndexContainer extends Component {
  componentDidMount () {
    const userId = this.props.params.userId || this.props.currentUser.id;
    this.props.dispatch(fetchEventsForUser(userId));
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.userId !== this.props.userId) {
      const userId = nextProps.params.userId || this.props.currentUser.id;
      this.props.dispatch(fetchEventsForUser(userId));
    }
  }

  render () {
    const { displayedUser, events, currentUser, loadingEvent } = this.props;
    const isCurrentUserEvents = (displayedUser.id === currentUser.id);

    if (loadingEvent) {
      return 'loading...';
    }

    return (
      <div>
        {
          (!isCurrentUserEvents) &&
          <UserPresentation user={displayedUser} />
        }

        <EventIndexComponent
          events={events}
          canEdit={isCurrentUserEvents}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { events, loadingEvent } = state.events;
  const { displayedUser, currentUser } = state.users;

  return {
    displayedUser,
    currentUser,
    events,
    loadingEvent
  };
}

export default connect(
  mapStateToProps
)(EventIndexContainer);
