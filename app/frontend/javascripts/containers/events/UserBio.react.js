import { connect } from 'react-redux';
import UserBioComponent from '../../components/events/UserBio.react';

const mapStateToProps = ({ users, events }) => {
  const displayedUserEvents = events[users.displayedUserId];
  return {
    displayedUser: users.list[users.displayedUserId],
    nbEvents: (displayedUserEvents ? displayedUserEvents.length : 0)
  };
};

export default connect(mapStateToProps)(UserBioComponent);
