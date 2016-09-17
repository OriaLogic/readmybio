import { connect } from 'react-redux';
import UserBioComponent from '../../components/users/UserBio.react';

const mapStateToProps = ({ users, events }) => {
  const { displayedUserId, currentUserId } = users;
  const displayedUser = users.list[users.displayedUserId];
  return {
    displayedUser,
    nbEvents: displayedUser.eventsCount,
    isCurrentUser: (displayedUserId === currentUserId)
  };
};

export default connect(mapStateToProps)(UserBioComponent);
