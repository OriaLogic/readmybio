import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { UserCategorieEventsPath } from '../../helpers/Routes';

const BackToList = ({ location, params }) => {
  const fromCategory = location.query.from_category || 'all';
  const { userId } = params;
  
  return (
    <Link to={UserCategorieEventsPath(userId, fromCategory)}>
      <i className='glyphicon glyphicon-arrow-left' />
      {' Back to list'}
    </Link>
  )
}

BackToList.propTypes = {
  location: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

export default BackToList;
