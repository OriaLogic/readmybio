import { connect } from 'react-redux';
import EventsWrapperComponent from '../../components/categories/EventsWrapper.react';

const mapStateToProps = (state, ownProps) => {
  const { displayedUserId } = state.users;
  const { categoryId } = ownProps.params;

  return { 
    category: (state.categories[displayedUserId][categoryId] || { name: 'all' })
  };
}

export default connect(mapStateToProps)(EventsWrapperComponent);
