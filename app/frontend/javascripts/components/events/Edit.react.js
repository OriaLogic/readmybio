import React, { Component, PropTypes } from 'react';
import BackToList from './BackToList.react';
import { Link } from 'react-router';
import { UserEventPath } from '../../helpers/Routes';

class EditEvent extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    updateEvent: PropTypes.func.isRequired
  }

  state = {
    eventParams: {
      title: this.props.event.title,
      description: this.props.event.description 
    }
  }

  verifyForm = () => {
    return true;
  }

  render () {
    const { event, location, params, updateEvent } = this.props;
    const fromCategory = location.query.from_category || 'all';
    const { userId, eventId } = params;

    return (
      <div
        className='event-edit'>
        <div className='event-breadcrumb'>
          <BackToList location={location} params={params} />
        </div>

        <div
          className='event-container'>
          <form
            onSubmit={ e => {
              e.preventDefault();
              if (!this.verifyForm()) { return; }
              this.props.updateEvent(this.state.eventParams);
            }}>
            <div className="form-group">
              <label>
                Title
              </label>
              <input
                type="text"
                className="form-control"
                value={this.state.eventParams.title}
                onChange={(e) => {
                  this.setState({
                    eventParams: {
                      ...this.state.eventParams,
                      title: e.target.value
                    }
                  });
                }}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={this.state.eventParams.description}
                onChange={(e) => {
                  this.setState({
                    eventParams: {
                      ...this.state.eventParams,
                      description: e.target.value
                    }
                  });
                }}
              />
            </div>

            <div className='actions clearfix'>
              <Link
                className='btn btn-default'
                to={UserEventPath(userId, eventId, fromCategory)}>
                Cancel
              </Link>

              <div className='pull-right'>
                <button
                  type="submit"
                  className="btn btn-success">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditEvent;
