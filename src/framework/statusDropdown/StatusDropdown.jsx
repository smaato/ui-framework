
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

    this.optionToMetaDataMap = {
      [StatusDropdown.OPTIONS.ACTIVATE]: {
        dropdownDotColor: DropdownDot.COLOR.GREEN,
        iconType: StatusDropdownOptionIcon.TYPE.ACTIVATE,
        labelClass: 'statusDropdownLabel--green',
        name: {
          active: 'Running',
          inactive: 'Start',
        },
      },
      [StatusDropdown.OPTIONS.ARCHIVE]: {
        dropdownDotColor: DropdownDot.COLOR.GREY,
        iconType: StatusDropdownOptionIcon.TYPE.ARCHIVE,
        labelClass: 'statusDropdownLabel--grey',
        name: {
          active: 'Archived',
          inactive: 'Archive',
        },
      },
      [StatusDropdown.OPTIONS.DEACTIVATE]: {
        dropdownDotColor: DropdownDot.COLOR.RED,
        iconType: StatusDropdownOptionIcon.TYPE.DEACTIVATE,
        labelClass: 'statusDropdownLabel--red',
        name: {
          active: 'Paused',
          inactive: 'Pause',
        },
      },
      [StatusDropdown.OPTIONS.DISABLED]: {
        dropdownDotColor: DropdownDot.COLOR.GREY,
        labelClass: 'statusDropdownLabel--grey',
        name: {
          active: 'Disabled',
        },
      },
      [StatusDropdown.OPTIONS.PUBLISHED]: {
        dropdownDotColor: DropdownDot.COLOR.GREEN,
        labelClass: 'statusDropdownLabel--green',
        name: {
          active: 'Published',
          inactive: 'Published',
        },
      },
      [StatusDropdown.OPTIONS.UNPUBLISHED]: {
        dropdownDotColor: DropdownDot.COLOR.GREY,
        labelClass: 'statusDropdownLabel--grey',
        name: {
          active: 'Unpublished',
          inactive: 'Unpublished',
        },
      },
    };
  }

  labelProvider(option) {
    const dropdownDotColor =
      this.optionToMetaDataMap[option] &&
      this.optionToMetaDataMap[option].dropdownDotColor;

    let name;

    if (option) {
      name = this.optionToMetaDataMap[option].name.active;
    } else {
      name = 'No Status';
    }

    return [
      <DropdownDot
        key={0}
        color={dropdownDotColor}
      />,
      <span key={1}>{name}</span>,
    ];
  }

  optionLabelProvider(option) {
    const type = this.optionToMetaDataMap[option].iconType;

    let name;
    let selectedIcon;

    if (option === this.props.selectedOption) {
      name = this.optionToMetaDataMap[option].name.active;
      selectedIcon = (
        <StatusDropdownOptionIcon
          key={2}
          type={StatusDropdownOptionIcon.TYPE.SELECTED}
        />
      );
    } else {
      name = this.optionToMetaDataMap[option].name.inactive;
    }

    const iconAvailable = !!this.optionToMetaDataMap[option].iconType;

    return iconAvailable ? [
      <StatusDropdownOptionIcon
        key={0}
        type={type}
      />,
      <span key={1}>{name}</span>,
      selectedIcon,
    ] :
    [<span key={1}>{name}</span>];
  }

  render() {
    const additionalLabelClass =
      this.props.selectedOption &&
      this.optionToMetaDataMap[this.props.selectedOption].labelClass;
    const isReadonly =
      this.props.selectedOption === StatusDropdown.OPTIONS.DISABLED;
    const labelClasses = classNames('statusDropdownLabel', {
      [additionalLabelClass]: additionalLabelClass,
      'statusDropdownLabel--disabled': isReadonly,
    });

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
        isReadonly={isReadonly}
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
  DISABLED: null,
  PUBLISHED: null,
  UNPUBLISHED: null,
});

StatusDropdown.propTypes = {
  onSelect: BaseDropdown.propTypes.onSelect,
  options: BaseDropdown.propTypes.options,
  selectedOption: BaseDropdown.propTypes.selectedOption,
};
