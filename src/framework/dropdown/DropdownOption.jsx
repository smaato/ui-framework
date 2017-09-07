
import React from 'react';

import classNames from 'classnames';
import BaseDropdownOption from '../base/dropdown/BaseDropdownOption.jsx';

const DropdownOption = (props) => {
  const classes = classNames('dropdownOption', props.classes);
  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <BaseDropdownOption
      {...extendedProps}
    />
  );
};

DropdownOption.propTypes = BaseDropdownOption.propTypes;

DropdownOption.defaultProps = {
  classes: 'dropdownOption',
  focusClasses: 'is-dropdown-option-focus',
};

export default DropdownOption;
