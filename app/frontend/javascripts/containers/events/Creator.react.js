import React, { Component, PropTypes } from 'react';
import { createEvent } from '../../actions/events';
import { connect } from 'react-redux';

// field :title, type: String
// field :description, type: String
// field :extra_description, type: String
// field :event_date, type: Date

const EventCreator = ({ dispatch }) => {
  let titleInput, descriptionTextArea, form;

  return (
    <div className='col-md-offset-3 col-md-6'>
      <h2>Create an event!</h2>
      <form
        ref={node => {
          form = node;
        }}
        onSubmit={ e => {
          e.preventDefault();
          if (!titleInput.value.trim()) { return; }
          dispatch(createEvent({
            title: titleInput.value,
            description: descriptionTextArea.value
          }));
          form.reset();
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

export default connect()(EventCreator);
