import { connect } from 'react-redux';
import EditComponent from '../../components/events/Edit.react';
import { updateEvent } from '../../actions/events';

const mapStateToProps = ({ events, users, categories }, { params }) => {
  const { currentUserId } = users;
  return {
    event: events[currentUserId][params.eventId],
    categories: categories[currentUserId]
  }
};

const mapDispatchToProps = (dispatch, { params }) => {
  const { userId, eventId } = params;

  return {
    updateEvent: (eventParams) => {
      dispatch(updateEvent(userId, eventId, eventParams));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
