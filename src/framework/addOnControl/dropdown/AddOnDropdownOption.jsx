
import React from 'react';

import BaseDropdownOption from '../../baseDropdown/BaseDropdownOption.jsx';

const AddOnDropdownOption = props => (
  <BaseDropdownOption
    {...props}
  />
);

AddOnDropdownOption.propTypes = BaseDropdownOption.propTypes;

AddOnDropdownOption.defaultProps = {
  classes: 'addOnDropdownOption',
  focusClasses: 'is-add-on-dropdown-option-focus',
};

export default AddOnDropdownOption;
