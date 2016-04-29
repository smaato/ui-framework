
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  StatusDot,
  StatusDropdown,
} from '../../../framework/framework';

export default class StatusDropdownExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDropdownOption: undefined,
    };

    this.dropdownItems = [{
      value: 0,
      name: 'Paused',
    }, {
      value: 1,
      name: 'Running',
    }];

    this.dropdownLabelProvider = option => {
      const valueToStatusMap = {
        0: StatusDot.STATUS.NEGATIVE,
        1: StatusDot.STATUS.POSITIVE,
      };

      let status;
      let value;

      if (option) {
        status = valueToStatusMap[this.state.selectedDropdownOption.value];
        value = option.name;
      } else {
        value = 'No status';
      }

      return [
        <StatusDot
          key={0}
          status={status}
        />,
        <span key={1}>
          {value}
        </span>,
      ];
    };

    this.dropdownOptionLabelProvider = option => {
      if (option) {
        return option.name;
      }

      return undefined;
    };

    this.onSelectDropdownOption = this.onSelectDropdownOption.bind(this);
  }

  onSelectDropdownOption(option) {
    this.setState({
      selectedDropdownOption: option,
    });
  }

  render() {
    const valueToStatusMap = {
      0: StatusDropdown.STATUS.NEGATIVE,
      1: StatusDropdown.STATUS.POSITIVE,
    };

    const status = this.state.selectedDropdownOption
      ? valueToStatusMap[this.state.selectedDropdownOption.value]
      : undefined;

    return (
      <Page title={this.props.route.name}>

        <Example>
          <StatusDropdown
            options={this.dropdownItems}
            selectedOption={this.state.selectedDropdownOption}
            onSelect={this.onSelectDropdownOption}
            labelProvider={this.dropdownLabelProvider}
            optionLabelProvider={this.dropdownOptionLabelProvider}
            status={status}
          />
        </Example>

      </Page>
    );
  }

}

StatusDropdownExample.propTypes = {
  route: PropTypes.object.isRequired,
};
