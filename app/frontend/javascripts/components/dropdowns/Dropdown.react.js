import React from 'react';
import classnames from 'classnames';
import { uniqueId } from 'lodash';

export const DROPDOWN_CONTAINERS_TYPES = {
  LI: 'li',
  DIV: 'div'
}

class Dropdown extends React.Component {
  static defaultProps = {
    closeAfterClick: true,
    closeIfClickOutside: true,
    container: DROPDOWN_CONTAINERS_TYPES.DIV
  }

  static propTypes = {
    container: React.PropTypes.string,
    externalLinkContent: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.string
    ]).isRequired,
    closeAfterClick: React.PropTypes.bool,
    closeIfClickOutside: React.PropTypes.bool
  }

  state = {
    open: false
  }

  id = uniqueId()

  componentDidMount () {
    if (this.props.closeAfterClick) {
      $(`#${this.id} ul a`).click(e => this.setState({ open: false }));
    }

    if (this.props.closeIfClickOutside) {
      $('body').click(e => {
        if (!$(e.target).closest(`#${this.id}`).length) {
          this.setState({ open: false })
        }
      });
    }
  }

  render () {
    let topClass = classnames('dropdown', {
      open: this.state.open
    });

    let dropdownLink = (
      <a
        href="#"
        className="dropdown-toggle"
        onClick={this.toggleDropdown}>
        {this.props.externalLinkContent}
      </a>
    );

    let dropdownContent = (
      <ul
        className="dropdown-menu"
        style={{ display: (this.state.open ? 'block' : 'none') }}>
        { this.props.children }
      </ul>
    );

    switch (this.props.container) {
    case DROPDOWN_CONTAINERS_TYPES.LI:
      return (
        <li
          className={topClass}
          id={this.id}>
          { dropdownLink }
          { dropdownContent }
        </li>
      );
    case DROPDOWN_CONTAINERS_TYPES.DIV:
    default:
      return (
        <div
          className={topClass}
          id={this.id}>
          { dropdownLink }
          { dropdownContent }
        </div>
      );
    }
  }

  toggleDropdown = () => {
    this.setState({ open: !this.state.open });
  }
}

export default Dropdown;
