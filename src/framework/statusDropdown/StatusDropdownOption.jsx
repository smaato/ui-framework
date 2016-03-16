
import React from 'react';

import BaseDropdownOption from '../baseDropdown/BaseDropdownOption.jsx';

const StatusDropdownOption = props => (
  <BaseDropdownOption
    {...props}
  />
);

StatusDropdownOption.propTypes = BaseDropdownOption.propTypes;

StatusDropdownOption.defaultProps = {
  classes: 'statusDropdownOption',
  focusClasses: 'is-dropdown-option-focus',
};

export default StatusDropdownOption;
