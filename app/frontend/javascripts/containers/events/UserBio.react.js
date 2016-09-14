import { connect } from 'react-redux';
import UserBioComponent from '../../components/events/UserBio.react';

const mapStateToProps = ({ users, events }) => {
  const displayedUser = users.list[users.displayedUserId];
  return {
    displayedUser,
    nbEvents: displayedUser.eventsCount
  };
};

export default connect(mapStateToProps)(UserBioComponent);
