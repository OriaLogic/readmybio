import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { keys } from 'lodash';
import { NB_CATEGORY_COLORS, generateCategoryColorClass } from '../../helpers/Colors';

class FormFinder extends Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    selectedTagIds: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    removeTag: PropTypes.func.isRequired
  }

  state = {
    inputText: '',
    focused: false
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
    const { focused } = this.state;
    const shouldOpenHintDropdown = (focused && this.computePossibleCategories().length > 0);

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
            style={{ position: 'relative', display: 'inline-block' }}
            className={'dropdown ' + (shouldOpenHintDropdown ? 'open' : '')}>
            <input
              className='form-control'
              onFocus={() => this.setState({ focused: true })}
              onBlur={
                () => setTimeout(() => {
                  this.setState({ focused: false })
                }, 100)
              }
              ref={node => this.input = node}
              style={{ width: 100 }}
              value={this.state.inputText}
              onChange={
                e => this.setState({
                  inputText: e.target.value.trim()
                })
              }
              id='tag-finder'
            />

            <ul className='possible-tags dropdown-menu'>
              {this.renderPossibleCategories()}
            </ul>
          </div>
        </div>
      </div>
    );generateCategoryColorClass(firstCategory ? firstCategory.color_code : 0)
  }

  computePossibleCategories = () => {
    const { categories, selectedTagIds, onChange } = this.props;
    const { inputText } = this.state;

    return keys(categories).filter(tagId => {
      return (
        selectedTagIds.indexOf(tagId) == -1 &&
        categories[tagId].name.indexOf(inputText) > -1
      )
    })
  }

  renderPossibleCategories = () => {
    const { categories, onChange } = this.props;

    return this.computePossibleCategories().map(tagId => {
      return (
        <li
          key={tagId}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onChange(tagId);
              this.setState({
                inputText: ''
              });
            }}>
            <span className={generateCategoryColorClass(categories[tagId].color_code)} />
            {categories[tagId].name}
          </a>
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
                key={tagId}>
                <a href='#' onClick={(e) => { e.preventDefault(); this.props.removeTag(tagId) }}>
                  <span
                    className={
                      'badge badge-square badge-lg ' +
                      (generateCategoryColorClass(categories[tagId] ? categories[tagId].color_code : -1))
                    }>
                    {categories[tagId] ? categories[tagId].name.capitalize() : tagId.capitalize()}
                  </span>
                </a>
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
