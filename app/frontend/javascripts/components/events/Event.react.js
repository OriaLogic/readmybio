import React, { PropTypes } from 'react';
import BackToList from './BackToList.react';
import { EditUserEventPath } from '../../helpers/Routes';
import { Link } from 'react-router';

const Event = ({ event, categories, canEdit, location, params }) => {
  const fromCategory = location.query.from_category || 'all';
  const { userId, eventId } = params;

  return (
    <div className='row event'>
      <div className='col-md-8 col-md-offset-2'>
        <div
          className='event-container'>
          <h3
            className='title'>
            {event.title.capitalize()}
          </h3>

          <h5>Tags</h5>
          <ul className='nav tags-list'>
            {
              event.tag_ids.map(tagId => {
                return (
                  <li
                    key={tagId}>
                    {categories[tagId].name.capitalize()}
                  </li>
                );
              })
            }
          </ul>

          <h5>Quick description</h5>
          <p>{event.quick_description}</p>

          <h5>Full story</h5>
          <p>{event.full_description}</p>
        </div>

        <div className='event-breadcrumb'>
          <BackToList params={params} />

          <div className='pull-right'>
            <Link to={EditUserEventPath(userId, eventId, fromCategory)}>
              <i className='glyphicon glyphicon-pencil '/>
              {' Edit'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

export default Event;
