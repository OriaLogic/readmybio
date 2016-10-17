import React, { Component, PropTypes } from 'react';
import { UserEventPath, UserEventsPath } from '../../helpers/Routes';
import TagFinder from '../../containers/tags/FormFinder.react';
import { filter } from 'lodash';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import FileUploader from '../images/FileUploader.react';
import { Link } from 'react-router';
import { keys } from 'lodash';
import { compressedFormat as dateFormat } from '../../constants/date';

class EditEvent extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired,
    updateEvent: PropTypes.func.isRequired,
    afterUpdate: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    userId: PropTypes.string.isRequired
  }

  state = {
    title: this.props.event.title,
    quickDescription: this.props.event.quick_description,
    fullDescription: this.props.event.full_description,
    selectedTagIds: this.props.event.tag_ids,
    eventDate: moment(this.props.event.event_date)
  }

  render () {
    const { updateEvent, afterUpdate, userId } = this.props;
    const { title, quickDescription, fullDescription, selectedTagIds, eventDate, images } = this.state;

    return (
      <div className='row event-editor'>
        <div className='col-md-8 col-md-offset-2'>
          <h4>{`Edit event`}</h4>
          <form
            ref={node => {
              this.form = node;
            }}
            onSubmit={ e => {
              e.preventDefault();
              updateEvent(userId, {
                title: title,
                quick_description: quickDescription,
                full_description: fullDescription,
                tag_ids: selectedTagIds,
                event_date: eventDate
              }).then((e) => {
                afterUpdate(e);
              })
            }}
            style={{ marginBottom: 20 }}>
            <div
              style={{ display: 'inline-block' }}
              className="form-group">
              <label>
                Title
              </label>
              <input
                type="text"
                className="form-control"
                onChange={e => {
                  this.setState({ title: e.target.value })
                }}
                value={title}
                style={{ width: 300 }}
                maxLength={200}
                />
            </div>

            <div
              style={{ display: 'inline-block' }}
              className="form-group date-picker-container">
              <label>
                When
              </label>
              <DatePicker
                dateFormat={dateFormat}
                selected={eventDate}
                onChange={d => { this.setState({ eventDate: d }) }}
                showYearDropdown={true}
              />
            </div>

            <TagFinder
              selectedTagIds={selectedTagIds}
              onChange={(tagId) => {
                this.setState({
                  selectedTagIds: [...selectedTagIds, tagId]
                });
              }}
              removeTag={tagId => {
                this.setState({
                  selectedTagIds: filter(selectedTagIds, id => id !== tagId)
                });
              }}
            />

            <div className="form-group">
              <label>Quick description</label>
              <textarea
                className="form-control"
                rows="3"
                maxLength={500}
                onChange={e => {
                  this.setState({ quickDescription: e.target.value })
                }}
                value={quickDescription}
              />
            </div>

            <div className="form-group">
              <label>Full description</label>
              <textarea
                className="form-control"
                rows="6"
                maxLength={10000}
                onChange={e => {
                  this.setState({ fullDescription: e.target.value })
                }}
                value={fullDescription}
              />
            </div>

            <div
              className='clearfix'>
              <Link
                className='pull-left'
                to={UserEventsPath('me')}
                style={{ padding: '6px 12px', paddingLeft: 0 }}>
                <i className='glyphicon glyphicon-arrow-left' style={{ marginRight: 5 }}/>
                Cancel
              </Link>

              <button
                type="submit"
                className="btn btn-success btn-square btn-empty pull-right">
                Update event
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditEvent;
