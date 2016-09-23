import { connect } from 'react-redux';
import Onboarding from '../components/Onboarding.react';
import { validateOnboarding } from '../actions/users';

const mapDispatchToProps = (dispatch) => {
  return {
    validateOnboarding: () => validateOnboarding()
  }
}

export default connect(null, mapDispatchToProps)(Onboarding);
