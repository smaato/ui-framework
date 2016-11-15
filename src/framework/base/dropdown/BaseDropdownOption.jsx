
import React, {
  Component,
  PropTypes,
} from 'react';

import classNames from 'classnames';

export default class BaseDropdownOption extends Component {

  constructor(props) {
    super(props);

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  onMouseMove() {
    // We use mouse move so that if the user's mouse is already over an option,
    // and then they use the arrow keys to select a different option, and then
    // move the mouse AGAIN, the option beneath the mouse becomes selected.
    this.props.onMouseOver(this.props.index);
  }

  onMouseDown(event) {
    // Prevent selecting an option from causing the dropdown from losing focus.
    event.stopPropagation();
    event.preventDefault();
    this.props.onClick(this.props.option);
  }

  render() {
    const stateClasses = {
      [this.props.focusClasses]: this.props.hasFocus,
      [this.props.selectedClasses]: this.props.isSelected,
    };
    const classes = classNames(this.props.classes, stateClasses);

    return (
      <div
        className={classes}
        onMouseMove={this.onMouseMove}
        onMouseDown={this.onMouseDown}
      >
        {this.props.children}
      </div>
    );
  }

}

BaseDropdownOption.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string,
  focusClasses: PropTypes.string,
  hasFocus: PropTypes.bool,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  option: PropTypes.any,
  selectedClasses: PropTypes.string,
};

BaseDropdownOption.defaultProps = {
  classes: 'option',
  focusClasses: 'is-option-focus',
  selectedClasses: 'is-option-selected',
};
