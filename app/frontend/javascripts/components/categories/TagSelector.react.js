import React, { Component, PropTypes } from 'react';
import Dropdown from '../dropdowns/Dropdown.react';
import { keys } from 'lodash';

export default class TagSelector extends Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    selectedTagId: PropTypes.string,
    onChange: PropTypes.func.isRequired
  }

  state = {
    searchedTagName: ''
  }

  render () {
    const { categories, selectedTagId, onChange } = this.props;
    const dropdownText = (selectedTagId ? categories[selectedTagId].name : 'All') + ' ';

    return (
      <Dropdown
        closeAfterClick={true}
        externalLinkContent={(
          <span>
            {dropdownText}
            <span className="caret" />
          </span>
        )}
        dropdownLinkClass={'btn btn-default'}>
        {
          keys(categories).map((tagId) => {
            return (
              <li key={tagId}>
                <a
                  href="#"
                  onClick={() => onChange(tagId)}>
                  {categories[tagId].name}
                </a>
              </li>
            )
          })
        }
      </Dropdown>
    );
  }
}
