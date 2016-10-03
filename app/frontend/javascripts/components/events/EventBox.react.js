import React, { Component, PropTypes } from 'react';
import { EditUserEventPath, UserEventPath } from '../../helpers/Routes';
import { Link } from 'react-router';
import EventBoxImageShower from '../categories/EventBoxImageShower.react';
import EventBoxTagShower from '../categories/EventBoxTagShower.react';
import moment from 'moment';
import { compressedFormat } from '../../constants/date';
import { keys } from 'lodash';

const EventBox = ({ event: ev, canEdit, params, categories }) => {
  const { userId, categoryId } = params;

  return (
    <div className='col-md-3'>
      <div className='event-box'>
        <h5
          className='title text-info'>
          {ev.title.capitalize()}
        </h5>

        <div className='actions'>
          <Link
            to={UserEventPath(userId, ev.id)}
            style={{ marginRight: 7 }}>
            <i className='glyphicon glyphicon-eye-open' />
          </Link>

          {
            canEdit &&
            <span>
              <Link
                to={EditUserEventPath(userId, ev.id)}
                style={{ marginRight: 7 }}>
                <i className='glyphicon glyphicon-pencil' />
              </Link>

              <a href='#'>
                <i className='glyphicon glyphicon-remove' />
              </a>
            </span>
          }
        </div>

        <EventBoxImageShower category={ev.tag_ids && ev.tag_ids.length ? categories[ev.tag_ids[0]] : null } />

        <div
          className='where-and-when clearfix'>
          <span className='when pull-right'>
            {moment(ev.event_date).format(compressedFormat)}
          </span>
        </div>

        <div className='tags'>
          <ul>
            {
              ev.tag_ids.map(tagId => {
                return (
                  <li
                    key={tagId}>
                    <EventBoxTagShower category={categories[tagId]} />
                  </li>

                )
              })
            }
          </ul>
        </div>

        <p className='quick-description'>{ev.quick_description}</p>
      </div>
    </div>
  );
}

EventBox.propTypes = {
  canEdit: PropTypes.bool.isRequired,
  event: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired
}

export default EventBox;
