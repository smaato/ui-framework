
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

import BaseDropdown from '../baseDropdown/BaseDropdown.jsx';

import StatusDropdownOption from './StatusDropdownOption.jsx';

export {
  default as StatusDot,
} from './statusDot/StatusDot.jsx';

export {
  default as StatusDropdownOption,
} from './StatusDropdownOption.jsx';

export {
  default as StatusDropdownOptionIcon,
} from './icon/StatusDropdownOptionIcon.jsx';

export default class StatusDropdown extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const labelClassMap = {
      [StatusDropdown.STATUS.NEGATIVE]: 'statusDropdownLabel--negative',
      [StatusDropdown.STATUS.POSITIVE]: 'statusDropdownLabel--positive',
    };

    const labelClasses = classNames(
      StatusDropdown.defaultProps.labelClasses,
      labelClassMap[this.props.status]
    );

    let sortedOptions;

    if (this.props.selectedOption) {
      sortedOptions = [];
      this.props.options.forEach(option => {
        if (option === this.props.selectedOption) {
          sortedOptions.unshift(option);
        } else {
          sortedOptions.push(option);
        }
      });
    } else {
      sortedOptions = this.props.options;
    }

    return (
      <BaseDropdown
        {...this.props}
        labelClasses={labelClasses}
        options={sortedOptions}
      />
    );
  }

}

StatusDropdown.STATUS = {
  NEGATIVE: 'NEGATIVE',
  POSITIVE: 'POSITIVE',
};

StatusDropdown.propTypes = Object.assign({}, BaseDropdown.propTypes, {
  status: PropTypes.string,
});

StatusDropdown.defaultProps = Object.assign({}, BaseDropdown.defaultProps, {
  classes: 'statusDropdown',
  inputClasses: 'statusDropdown__input',
  labelClasses: 'statusDropdownLabel',
  labelFocusClasses: 'is-status-dropdown-label-focus',
  optionListClasses: 'statusDropdownOptionList',
  optionType: StatusDropdownOption,
});
