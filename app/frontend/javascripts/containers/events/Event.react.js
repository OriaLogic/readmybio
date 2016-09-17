import { connect } from 'react-redux';
import EventComponent from '../../components/events/Event.react';

const mapStateToProps = ({ events, users }, { params }) => {
  return {
    event: events.list[params.eventId],
    canEdit: (users.currentUserId === users.displayedUserId)
  }
}

export default connect(mapStateToProps)(EventComponent);
