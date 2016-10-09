import React, { Component, PropTypes } from 'react';
import Dropdown from '../dropdowns/Dropdown.react';
import { keys } from 'lodash';
import { generateCategoryColorClass } from '../../helpers/Colors';

export default class TagSelector extends Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    selectedTagId: PropTypes.string,
    onChange: PropTypes.func.isRequired
  }

  state = {
    searchedTagName: '',
    focused: false
  }

  render () {
    const { categories, selectedTagId, onChange } = this.props;
    let dropdownText;

    if (selectedTagId) {
      dropdownText = (
        <span>
          <span className={'pastille ' + generateCategoryColorClass(categories[selectedTagId].color_code)} />
          <span style={{ verticalAlign: 'middle' }}>
            {categories[selectedTagId].name.capitalize() + ' '}
          </span>
        </span>
      );
    } else {
      dropdownText = <span>{'All '}</span>;
    }
    return (
      <div
        className='tag-selector'
        style={{ display: 'inline-block' }}>
        <Dropdown
          closeAfterClick={true}
          externalLinkContent={(
            <span>
              {dropdownText}
              <span className="caret" />
            </span>
          )}
          dropdownLinkClass={'btn btn-default btn-empty btn-square'}>
          <li key={'no-tag'}>
            <a
              href="#"
              onClick={() => onChange(null)}>
              <i className='glyphicon glyphicon-remove' style={{ fontSize: 10, marginRight: 5 }} />
              All
            </a>
          </li>

          {
            keys(categories).map((tagId) => {
              return (
                <li key={tagId}>
                  <a
                    href="#"
                    onClick={() => onChange(tagId)}>
                    <span className={'pastille ' + generateCategoryColorClass(categories[tagId].color_code)} />
                    {categories[tagId].name.capitalize()}
                  </a>
                </li>
              )
            })
          }
        </Dropdown>
      </div>
    );
  }
}
