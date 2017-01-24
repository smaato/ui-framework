
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

import BaseDropdown from '../base/dropdown/BaseDropdown.jsx';

import DropdownOption from './DropdownOption.jsx';

export {
  default as DropdownDot,
} from './dropdownDot/DropdownDot.jsx';

export {
  default as DropdownOption,
} from './DropdownOption.jsx';

export default class Dropdown extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const labelClasses = classNames(this.props.labelClasses, {
      'dropdownLabel--borderless': this.props.isBorderless,
      'dropdownLabel--readonly': this.props.isReadonly,
    });

    const extendedProps = Object.assign({}, this.props, {
      labelClasses,
    });

    return (
      <BaseDropdown
        {...extendedProps}
      />
    );
  }

}

Dropdown.propTypes = Object.assign({}, BaseDropdown.propTypes, {
  isBorderless: PropTypes.bool,
});

Dropdown.defaultProps = Object.assign({}, BaseDropdown.defaultProps, {
  classes: 'dropdown',
  inputClasses: 'dropdown__input',
  labelClasses: 'dropdownLabel',
  labelFocusClasses: 'is-dropdown-label-focus',
  optionListClasses: 'dropdownOptionList',
  optionType: DropdownOption,
});
