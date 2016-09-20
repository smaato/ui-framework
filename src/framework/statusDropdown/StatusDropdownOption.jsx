
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
  focusClasses: 'is-status-dropdown-option-focus',
  selectedClasses: 'is-status-dropdown-option-selected',
};

export default StatusDropdownOption;
