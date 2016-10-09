import React, { Component, PropTypes } from 'react';
import { EditUserEventPath, UserEventPath } from '../../helpers/Routes';
import { Link } from 'react-router';
import EventBoxImageShower from '../categories/EventBoxImageShower.react';
import EventBoxTagShower from '../categories/EventBoxTagShower.react';
import moment from 'moment';
import { compressedFormat } from '../../constants/date';
import { keys } from 'lodash';
import { generateCategoryColorClass } from '../../helpers/Colors';

const EventBox = ({ event: ev, canEdit, params, categories }) => {
  const { userId, categoryId } = params;
  const firstCategory = (ev.tag_ids && ev.tag_ids.length) ? categories[ev.tag_ids[0]] : null

  return (
    <div className={'event-box ' + generateCategoryColorClass(firstCategory ? firstCategory.color_code : 0)}>
      <h5
        className='title'>
        {ev.title.capitalize()}
      </h5>

      <div
        style={{ position: 'relative' }}>
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

        <EventBoxImageShower event={ev} category={firstCategory} />
      </div>

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
  );
}

EventBox.propTypes = {
  canEdit: PropTypes.bool.isRequired,
  event: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired
}

export default EventBox;
