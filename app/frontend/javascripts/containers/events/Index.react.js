import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import EventIndexComponent from '../../components/events/Index.react';
import { fetchEventsForUserAndCategory } from '../../actions/events';

class EventIndexContainer extends Component {
  componentDidMount () {
    const { userId, categoryId } = this.props.params;
    this.props.dispatch(fetchEventsForUserAndCategory(userId, categoryId));
  }

  componentWillReceiveProps (nextProps) {
    const { userId, categoryId } = this.props.params;
    const { userId: newUserId, categoryId: newCategoryId } = nextProps.params;

    console.log(newUserId, userId, newCategoryId, categoryId)
    if (newUserId !== userId || newCategoryId !== categoryId) {
      // this.props.dispatch(fetchEventsForUserAndCategory(newUserId, newCategoryId));
    }
  }

  render () {
    return <EventIndexComponent {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const canEdit = state.currentUserId === state.displayedUserId;
  const { loading, list: eventsList } = state.events;

  return {
    events: eventsList,
    loading: loading,
    canEdit
  }
}

export default connect(
  mapStateToProps
)(EventIndexContainer);
