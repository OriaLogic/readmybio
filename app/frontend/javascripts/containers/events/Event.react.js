import { connect } from 'react-redux';
import EventComponent from '../../components/events/Event.react';
import { deleteEvent } from '../../actions/events';

const mapStateToProps = ({ events, users, categories }, { params }) => {
  return {
    event: events[users.displayedUserId][params.eventId],
    categories: categories[users.displayedUserId],
    canEdit: (users.currentUserId === users.displayedUserId),
    userId: users.displayedUserId
  }
}

const mapDispatchToProps = (dispatch, { params }) => {
  return {
    deleteEvent: (userId) => dispatch(deleteEvent(userId, params.eventId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventComponent);
