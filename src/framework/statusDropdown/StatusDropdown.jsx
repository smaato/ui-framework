
import classNames from 'classnames';
import keyMirror from 'keymirror';
import React, {
  Component,
} from 'react';

import BaseDropdown from '../base/dropdown/BaseDropdown.jsx';
import DropdownDot from '../dropdown/dropdownDot/DropdownDot.jsx';
import StatusDropdownOption from './StatusDropdownOption.jsx';
import StatusDropdownOptionIcon
  from './statusDropdownOptionIcon/StatusDropdownOptionIcon.jsx';

export {
  default as StatusDropdownOption,
} from './StatusDropdownOption.jsx';

export {
  default as StatusDropdownOptionIcon,
} from './statusDropdownOptionIcon/StatusDropdownOptionIcon.jsx';

export default class StatusDropdown extends Component {

  constructor(props) {
    super(props);

    this.labelProvider = this.labelProvider.bind(this);
    this.optionLabelProvider = this.optionLabelProvider.bind(this);

    this.optionToIconTypeMap = {
      [StatusDropdown.OPTIONS.ACTIVATE]: StatusDropdownOptionIcon.TYPE.ACTIVATE,
      [StatusDropdown.OPTIONS.ARCHIVE]: StatusDropdownOptionIcon.TYPE.ARCHIVE,
      [StatusDropdown.OPTIONS.DEACTIVATE]:
        StatusDropdownOptionIcon.TYPE.DEACTIVATE,
    };

    this.optionToLabelClassesMap = {
      [StatusDropdown.OPTIONS.ACTIVATE]: 'statusDropdownLabel--green',
      [StatusDropdown.OPTIONS.DEACTIVATE]: 'statusDropdownLabel--red',
    };

    this.optionToNameMap = {
      [StatusDropdown.OPTIONS.ACTIVATE]: 'Start',
      [StatusDropdown.OPTIONS.ARCHIVE]: 'Archive',
      [StatusDropdown.OPTIONS.DEACTIVATE]: 'Pause',
    };

    this.optionToSelectedNameMap = {
      [StatusDropdown.OPTIONS.ACTIVATE]: 'Running',
      [StatusDropdown.OPTIONS.ARCHIVE]: 'Archived',
      [StatusDropdown.OPTIONS.DEACTIVATE]: 'Paused',
    };

    this.optionToStatusMap = {
      [StatusDropdown.OPTIONS.ACTIVATE]: DropdownDot.COLOR.GREEN,
      [StatusDropdown.OPTIONS.ARCHIVE]: DropdownDot.COLOR.GREY,
      [StatusDropdown.OPTIONS.DEACTIVATE]: DropdownDot.COLOR.RED,
    };
  }

  labelProvider(option) {
    const color = this.optionToStatusMap[option];

    let name;

    if (option) {
      name = this.optionToSelectedNameMap[option];
    } else {
      name = 'No Status';
    }

    return [
      <DropdownDot
        key={0}
        color={color}
      />,
      <span key={1}>{name}</span>,
    ];
  }

  optionLabelProvider(option) {
    const type = this.optionToIconTypeMap[option];

    let name;
    let selectedIcon;

    if (option === this.props.selectedOption) {
      name = this.optionToSelectedNameMap[option];
      selectedIcon = (
        <StatusDropdownOptionIcon
          key={3}
          type={StatusDropdownOptionIcon.TYPE.SELECTED}
        />
      );
    } else {
      name = this.optionToNameMap[option];
    }

    return [
      <StatusDropdownOptionIcon
        key={0}
        type={type}
      />,
      <span key={1}>{name}</span>,
      selectedIcon,
    ];
  }

  render() {
    const labelClasses = classNames(
      'statusDropdownLabel',
      this.optionToLabelClassesMap[this.props.selectedOption]
    );

    let sortedOptions;

    if (this.props.selectedOption) {
      sortedOptions = [];
      this.props.options.forEach((option) => {
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
        classes="statusDropdown"
        inputClasses="statusDropdown__input"
        labelClasses={labelClasses}
        labelFocusClasses="is-status-dropdown-label-focus"
        labelProvider={this.labelProvider}
        onSelect={this.props.onSelect}
        optionLabelProvider={this.optionLabelProvider}
        optionListClasses="statusDropdownOptionList"
        optionType={StatusDropdownOption}
        options={sortedOptions}
        selectedOption={this.props.selectedOption}
      />
    );
  }

}

StatusDropdown.OPTIONS = keyMirror({
  ACTIVATE: null,
  ARCHIVE: null,
  DEACTIVATE: null,
});

StatusDropdown.propTypes = {
  onSelect: BaseDropdown.propTypes.onSelect,
  options: BaseDropdown.propTypes.options,
  selectedOption: BaseDropdown.propTypes.selectedOption,
};
