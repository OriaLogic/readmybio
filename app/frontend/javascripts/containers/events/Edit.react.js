import { connect } from 'react-redux';
import EditComponent from '../../components/events/Edit.react';
import { updateEvent } from '../../actions/events';
import { syncedHistory } from '../../store';
import { UserEventPath } from '../../helpers/Routes';

const mapStateToProps = ({ events, users, categories }, { params }) => {
  const { currentUserId } = users;
  return {
    event: events[currentUserId][params.eventId],
    categories: categories[currentUserId],
    userId: currentUserId
  }
};

const mapDispatchToProps = (dispatch, { params }) => {
  const { eventId } = params;

  return {
    updateEvent: (userId, eventParams) => dispatch(updateEvent(userId, eventId, eventParams)),
    afterUpdate: (e) => syncedHistory.push(UserEventPath('me', e.id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
