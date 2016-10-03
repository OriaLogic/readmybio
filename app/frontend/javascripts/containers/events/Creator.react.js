import React, { Component, PropTypes } from 'react';
import { createEvent } from '../../actions/events';
import { connect } from 'react-redux';
import { syncedHistory } from '../../store';
import { UserEventPath } from '../../helpers/Routes';
import TagFinder from '../tags/FormFinder.react';
import { filter } from 'lodash';
var DatePicker = require('react-datepicker');
var moment = require('moment');

export default class EventCreator extends Component {
  static propTypes = {
    create: PropTypes.func.isRequired,
    afterCreate: PropTypes.func.isRequired,
    eventsCount: PropTypes.number.isRequired
  }

  state = {
    selectedTagIds: [],
    eventDate: moment()
  }

  render () {
    const { create, afterCreate, eventsCount } = this.props;
    const { selectedTagIds, eventDate } = this.state;

    return (
      <div className='row event-creator'>
        <div className='col-md-8 col-md-offset-2'>
          <h3>{`Create ${eventsCount === 0 ? 'your first' : ''} event`}</h3>
          <form
            ref={node => {
              this.form = node;
            }}
            onSubmit={ e => {
              e.preventDefault();
              create({
                title: this.titleInput.value,
                quick_description: this.quickDescriptionTextArea.value,
                full_description: this.fullDescriptionTextArea.value,
                tag_ids: selectedTagIds,
                event_date: eventDate
              }).then((e) => {
                this.form.reset();
                afterCreate(e);
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
                ref={node => { this.titleInput = node; }}
                style={{ width: 300 }}
                maxLength={200}
                />
            </div>

            <div
              style={{ display: 'inline-block' }}
              className="form-group date-picker-container">
              <label>
                Where
              </label>
              <DatePicker
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

            <div
              className='clearfix'>
              <button
                type="submit"
                className="btn btn-default pull-right">
                Submit
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
