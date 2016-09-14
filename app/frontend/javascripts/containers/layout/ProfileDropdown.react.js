import { connect } from 'react-redux';
import { logoutUser } from '../../actions/users';
import ProfileDropdown from '../../components/layout/ProfileDropdown.react';

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown);
