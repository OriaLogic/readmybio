import React, { PropTypes } from 'react';
import BackToList from './BackToList.react';
import { EditUserEventPath, UserEventsPath } from '../../helpers/Routes';
import { Link } from 'react-router';
import moment from 'moment';
import { keys } from 'lodash';
import { format as dateFormat } from '../../constants/date';
import { generateCategoryColorClass } from '../../helpers/Colors';
import ImageGallery from 'react-image-gallery';
import { buildCloudinaryUrl, SCALED_100_75 } from '../../constants/cloudinary';

const Event = ({ event, categories, canEdit, location, params, userId, deleteEvent }) => {
  const fromCategory = location.query.from_category || 'all';
  const { eventId } = params;
  const images = keys(event.images).map(imageId => {
    let image = event.images[imageId];

    return {
      original: image.url,
      thumbnail: buildCloudinaryUrl(imageId, SCALED_100_75),
      originalAlt: imageId,
      thumbnailAlt: imageId
    }
  });

  return (
    <div className='event'>
      <div
        className='event-container'>

        <div style={{ minHeight: 350 }}>
          <div className='header'>

            <h4
              className='title'>
              {event.title.capitalize()}
            </h4>


            <div className='additional-info'>
              <span>{moment(event.event_date).format(dateFormat)}</span>
            </div>

            <ul className='nav  nav-pills big-tags-list'>
              {
                event.tag_ids.map(tagId => {
                  return (
                    <li
                      key={tagId}>
                      <span
                        className={
                          'badge badge-square badge-lg ' +
                          (generateCategoryColorClass(categories[tagId] ? categories[tagId].color_code : -1))
                        }>
                        {categories[tagId].name.capitalize()}
                      </span>
                    </li>
                  );
                })
              }
            </ul>
          </div>

          {
            event.quick_description &&
            <p
              style={{ marginBottom: 30 }}>
              {event.quick_description}
            </p>
          }

          {
            event.full_description &&
            <p
              style={{ marginBottom: 30 }}>
              {event.full_description}
            </p>
          }

          {
            images.length > 0 &&
            <div
              style={{ marginBottom: 50 }}>
              <ImageGallery
                items={images}
                slideInterval={2000}
                showBullets={true}
                />
            </div>
          }
        </div>

        <div
          className='clearfix'
          style={{ marginTop: 30 }}>
          <Link
            className='pull-left'
            to={UserEventsPath(canEdit ? 'me' : userId)}
            style={{ padding: '6px 12px', paddingLeft: 0 }}>
            <i className='glyphicon glyphicon-arrow-left' style={{ marginRight: 5 }}/>
            Back to list
          </Link>

          {
            canEdit &&
            <div className='pull-right'>
              <a
                onClick={e => {
                  e.preventDefault();
                  if (window.confirm('Are you sure you want to delete this event?')) {
                    deleteEvent(userId);
                  }
                }}
                href="#"
                className="btn btn-danger btn-square btn-empty"
                style={{ marginRight: 10 }}>
                Delete event
              </a>

              <Link
                to={EditUserEventPath('me', eventId, fromCategory)}
                className="btn btn-success btn-square btn-empty">
                Edit event
              </Link>
            </div>
          }
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
