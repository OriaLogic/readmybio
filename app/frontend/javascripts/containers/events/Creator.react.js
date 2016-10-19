import React, { Component, PropTypes } from 'react';
import { createEvent } from '../../actions/events';
import { connect } from 'react-redux';
import { syncedHistory } from '../../store';
import { UserEventPath, UserEventsPath } from '../../helpers/Routes';
import TagFinder from '../tags/FormFinder.react';
import { filter } from 'lodash';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import FileUploader from '../../components/images/FileUploader.react';
import { Link } from 'react-router';
import { compressedFormat as dateFormat } from '../../constants/date';
import EditionErrors from '../../components/events/EditionErrors.react';

const BASE_STATE = {
  selectedTagIds: [],
  eventDate: moment(),
  images: [],
  errors: []
};

export default class EventCreator extends Component {
  static propTypes = {
    create: PropTypes.func.isRequired,
    afterCreate: PropTypes.func.isRequired,
    eventsCount: PropTypes.number.isRequired
  }

  state = BASE_STATE

  onImageDrop = (files) => {
    const { images } = this.state;
    this.setState({
      images: [...images, ...files]
    });
  }

  onImageRemove = imageId => {
    this.setState({
      images: this.state.images.filter(image => image.preview !== imageId)
    });
  }

  validateSubmission = () => {
    const errors = []
    if (!this.titleInput.value || !this.titleInput.value.trim().length > 0) {
      errors.push('Title is a mandatory field.');
    }

    if (!this.quickDescriptionTextArea.value || !this.quickDescriptionTextArea.value.trim().length > 0) {
      errors.push('Quick description is a mandatory field.');
    }

    if (this.state.selectedTagIds.length === 0) {
      errors.push('Event must have at least one tag.');
    }

    this.setState({
      errors: errors
    });

    return errors.length === 0;
  }

  render () {
    const { create, afterCreate, eventsCount } = this.props;
    const { selectedTagIds, eventDate, images, errors } = this.state;

    return (
      <div className='row event-creator'>
        <div className='col-md-8 col-md-offset-2'>
          <h4>{`Create ${eventsCount === 0 ? 'your first' : ''} event`}</h4>
          <form
            ref={node => {
              this.form = node;
            }}
            onSubmit={ e => {
              e.preventDefault();
              if (this.validateSubmission()) {
                create({
                  title: this.titleInput.value,
                  quick_description: this.quickDescriptionTextArea.value,
                  full_description: this.fullDescriptionTextArea.value,
                  tag_ids: selectedTagIds,
                  event_date: eventDate,
                  images
                }).then((e) => {
                  this.setState(BASE_STATE);
                  this.form.reset();
                  afterCreate(e);
                })
              }
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
                ref={node => { this.titleInput = node; }}
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
                onChange={d => { this.setState({ eventDate: d}) }}
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
                ref={node => { this.quickDescriptionTextArea = node; }}
                />
            </div>

            <div className="form-group">
              <label>Full description</label>
              <textarea
                className="form-control"
                rows="6"
                maxLength={10000}
                ref={node => { this.fullDescriptionTextArea = node; }}
                />
            </div>

            <FileUploader
              onDrop={this.onImageDrop}
              files={images}
              maxFiles={6}
              mimeType={'image/*'}
              onRemove={this.onImageRemove}
            />

            {
              errors.length > 0 &&
              <EditionErrors errors={errors} />
            }

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
                Create event
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const { list, currentUserId } = users;
  const currentUser = list[currentUserId];
  return {
    eventsCount: currentUser.eventsCount
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: (eventParams) => dispatch(createEvent(eventParams)),
    afterCreate: (e) => syncedHistory.push(UserEventPath('me', e.id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCreator);
