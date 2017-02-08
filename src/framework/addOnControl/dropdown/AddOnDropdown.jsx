
import classNames from 'classnames';
import React, {
  PropTypes,
} from 'react';

import BaseDropdown from '../../base/dropdown/BaseDropdown.jsx';
import AddOnDropdownOption from './AddOnDropdownOption.jsx';

const AddOnDropdown = (props) => {
  const labelClasses = classNames(props.labelClasses, {
    'addOnDropdownLabel--left': props.isLeftSide,
    'addOnDropdownLabel--right': props.isRightSide,
  });

  return (
    <BaseDropdown
      {...props}
      labelClasses={labelClasses}
    />
  );
};

AddOnDropdown.propTypes = Object.assign({}, BaseDropdown.propTypes, {
  isLeftSide: PropTypes.bool,
  isRightSide: PropTypes.bool,
});

AddOnDropdown.defaultProps = Object.assign({}, BaseDropdown.defaultProps, {
  classes: 'addOnDropdown',
  labelClasses: 'addOnDropdownLabel',
  inputClasses: 'addOnDropdown__input',
  labelFocusClasses: 'is-add-on-dropdown-label-focus',
  optionListClasses: 'addOnDropdownOptionList',
  optionType: AddOnDropdownOption,
});

export default AddOnDropdown;
