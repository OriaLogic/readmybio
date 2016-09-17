import React, { Component, PropTypes } from 'react';
import { createEvent } from '../../actions/events';
import { connect } from 'react-redux';
import { syncedHistory } from '../../store';
import { UserEventPath } from '../../helpers/Routes';

const EventCreator = ({ create, afterCreate }) => {
  let titleInput, descriptionTextArea, form;

  return (
    <div>
      <h3>Create an event</h3>
      <form
        ref={node => {
          form = node;
        }}
        onSubmit={ e => {
          e.preventDefault();
          if (!titleInput.value.trim()) { return; }
          create({
            title: titleInput.value,
            description: descriptionTextArea.value
          }).then((e) => {
            form.reset();
            afterCreate(e);
          })
        }}>
        <div className="form-group">
          <label>
            Title
          </label>
          <input
            type="text"
            className="form-control"
            ref={node => { titleInput = node; }}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            rows="3"
            ref={node => { descriptionTextArea = node; }}
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
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: (eventParams) => dispatch(createEvent(eventParams)),
    afterCreate: (e) => syncedHistory.push(UserEventPath('me', e.id))
  }
};

export default connect(null, mapDispatchToProps)(EventCreator);
