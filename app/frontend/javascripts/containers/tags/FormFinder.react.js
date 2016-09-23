import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { keys } from 'lodash';

class FormFinder extends Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    selectedTagIds: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    removeTag: PropTypes.func.isRequired
  }

  state = {
    inputText: ''
  }

  componentDidMount () {
    $('#tag-finder').keydown(e => {
      if (e.keyCode == 13) {
        e.preventDefault();
        e.stopPropagation();

        const { categories, selectedTagIds, onChange } = this.props;

        let exists = false, matchingId = null, enteredName = this.state.inputText;
        keys(categories).map(tagId => {
          let isMatching = categories[tagId].name == enteredName;

          if (isMatching) {
            exists = true;
            matchingId = tagId;
          }
        });

        let returnVal = matchingId || enteredName;
        if (!selectedTagIds.indexOf(returnVal) > -1) {
          onChange(returnVal);
          this.setState({
            inputText: ''
          });
        }

        return false;
      }
    });
  }

  render () {
    const { categories, selectedTagIds, onChange } = this.props;

    return (
      <div
        className='tag-finder form-group'>
        <label>
          Tags
        </label>
        <div>
          {
            (selectedTagIds.length > 0) &&
            this.renderSelectedTags()
          }

          <div
            style={{ position: 'relative', display: 'inline-block' }}>
            <input
              className='form-control'
              style={{ width: 150 }}
              value={this.state.inputText}
              onChange={
                e => this.setState({
                  inputText: e.target.value.trim()
                })
              }
              id='tag-finder'
            />

            <ul className='possible-tags'>
              {this.renderPossibleCategories()}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  renderPossibleCategories = () => {
    const { categories, selectedTagIds, onChange } = this.props;
    const { inputText } = this.state;

    return keys(categories).filter(tagId => {
      return (
        selectedTagIds.indexOf(tagId) == -1 &&
        categories[tagId].name.indexOf(inputText) > -1
      )
    }).map(tagId => {
      return (
        <li
          key={tagId}>
          <a href="#">{categories[tagId].name}</a>
        </li>
      )
    });
  }

  renderSelectedTags = () => {
    const { categories, selectedTagIds, onChange } = this.props;

    return (
      <ul className='nav nav-pills selected-tags'>
        {
          selectedTagIds.map((tagId) => {
            return (
              <li
                key={tagId}
                onClick={() => this.props.removeTag(tagId)}>
                {categories[tagId] ? categories[tagId].name : tagId}
              </li>
            );
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ categories, users }) => {
  const { currentUserId } = users;
  return {
    categories: categories[currentUserId]
  }
}

export default connect(mapStateToProps)(FormFinder);
