
import React, {
  Component,
} from 'react';

import BaseDropdown from '../baseDropdown/BaseDropdown.jsx';

import DropdownOption from './DropdownOption.jsx';

export {
  default as DropdownOption,
} from './DropdownOption.jsx';

export default class Dropdown extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BaseDropdown
        {...this.props}
      />
    );
  }

}

Dropdown.propTypes = BaseDropdown.propTypes;

Dropdown.defaultProps = Object.assign({}, BaseDropdown.defaultProps, {
  classes: 'dropdown',
  inputClasses: 'dropdown__input',
  labelClasses: 'dropdownLabel',
  labelFocusClasses: 'is-dropdown-label-focus',
  optionListClasses: 'dropdownOptionList',
  optionType: DropdownOption,
});
