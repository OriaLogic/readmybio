import { connect } from 'react-redux';
import EventComponent from '../../components/events/Event.react';

const mapStateToProps = ({ events, users, categories }, { params }) => {
  return {
    event: events[users.displayedUserId][params.eventId],
    categories: categories[users.displayedUserId],
    canEdit: (users.currentUserId === users.displayedUserId)
  }
}

export default connect(mapStateToProps)(EventComponent);
