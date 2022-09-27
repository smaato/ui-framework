
import classNames from 'classnames';
import React from 'react';

import BaseDropdownOption from '../base/dropdown/BaseDropdownOption.jsx';

const DropdownOption = (props) => {
  console.log("dropdown props ",props);
  const classes = classNames('dropdownOption', props.classes);
  const extendedProps = Object.assign({}, props, {
    classes,
  });
  console.log("dropdown extendedProps ",extendedProps);
  return (
    <BaseDropdownOption
      {...extendedProps}
    />
  );
};

DropdownOption.propTypes = BaseDropdownOption.propTypes;

DropdownOption.defaultProps = {
  focusClasses: 'is-dropdown-option-focus',
};

export default DropdownOption;
