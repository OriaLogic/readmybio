import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppComponent from '../components/App.react';
import { fetchUser } from '../actions/user';

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(fetchUser());
  }

  render () {
    return (
      <AppComponent {...this.props}>{this.props.children}</AppComponent>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLoading: state.user.loading
  }
}

export default connect(mapStateToProps)(App);
