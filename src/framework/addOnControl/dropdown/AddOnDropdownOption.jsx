
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const AddOnDropdownOption = props => {
  // We use mouse move so that if the user's mouse is already over an option,
  // and then they use the arrow keys to select a different option, and then
  // move the mouse AGAIN, the option beneath the mouse becomes selected.
  function onMouseMove() {
    props.onMouseOver(props.index);
  }

  function onMouseDown(event) {
    // Prevent selecting an option from causing the dropdown from losing focus.
    event.stopPropagation();
    event.preventDefault();
    props.onClick(props.option);
  }

  const classes = classNames('addOnDropdownOption', {
    'is-add-on-dropdown-option-focus': props.hasFocus,
  });

  return (
    <div
      className={classes}
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
    >
      {props.children}
    </div>
  );
};

AddOnDropdownOption.propTypes = {
  onClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  option: PropTypes.any,
  index: PropTypes.number,
  hasFocus: PropTypes.bool,
};

export default AddOnDropdownOption;
