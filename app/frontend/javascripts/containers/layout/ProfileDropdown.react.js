import { connect } from 'react-redux';
import { logoutUser } from '../../actions/user';
import ProfileDropdown from '../../components/layout/ProfileDropdown.react';

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown);
