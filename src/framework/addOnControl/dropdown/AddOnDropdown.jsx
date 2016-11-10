
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

import BaseDropdown from '../../base/dropdown/BaseDropdown.jsx';

import AddOnDropdownOption from './AddOnDropdownOption.jsx';

export default class AddOnDropdown extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const labelClasses = classNames(this.props.labelClasses, {
      'addOnDropdownLabel--left': this.props.isLeftSide,
      'addOnDropdownLabel--right': this.props.isRightSide,
    });

    return (
      <BaseDropdown
        {...this.props}
        labelClasses={labelClasses}
      />
    );
  }

}

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
