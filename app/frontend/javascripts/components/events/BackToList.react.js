import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { UserEventsPath } from '../../helpers/Routes';

const BackToList = ({ params }) => {
  const { userId } = params;

  return (
    <Link to={UserEventsPath(userId)}>
      <i className='glyphicon glyphicon-arrow-left' />
      {' Back to list'}
    </Link>
  )
}

BackToList.propTypes = {
  params: PropTypes.object.isRequired
};

export default BackToList;
