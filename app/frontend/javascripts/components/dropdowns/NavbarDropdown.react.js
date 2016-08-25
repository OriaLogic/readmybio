import React from 'react';
import Dropdown, { DROPDOWN_CONTAINERS_TYPES } from './Dropdown.react';

class NavbarDropdown extends React.Component {
  static defaultProps = {
    closeAfterClick: true
  }

  static propTypes = {
    externalLinkContent: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.string
    ]).isRequired,
    closeAfterClick: React.PropTypes.bool
  }

  render () {
    return (
      <Dropdown
        container={DROPDOWN_CONTAINERS_TYPES.LI}
        {...this.props}>
        {this.props.children}
      </Dropdown>
    );
  }
}

export default NavbarDropdown;
