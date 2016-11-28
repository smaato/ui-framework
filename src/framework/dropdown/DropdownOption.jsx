
import React from 'react';

import BaseDropdownOption from '../base/dropdown/BaseDropdownOption.jsx';

const DropdownOption = props => (
  <BaseDropdownOption
    {...props}
  />
);

DropdownOption.propTypes = BaseDropdownOption.propTypes;

DropdownOption.defaultProps = {
  classes: 'dropdownOption',
  focusClasses: 'is-dropdown-option-focus',
};

export default DropdownOption;
