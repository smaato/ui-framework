
import React from 'react';

import BaseDropdownOption from '../baseDropdown/BaseDropdownOption.jsx';

const DropdownOption = props => {
  return (
    <BaseDropdownOption
      {...props}
    />
  );
};

DropdownOption.propTypes = BaseDropdownOption.propTypes;

DropdownOption.defaultProps = {
  classes: 'dropdownOption',
  focusClasses: 'is-dropdown-option-focus',
};

export default DropdownOption;
