
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  StatusDropdown,
  StatusDropdownOptionIcon,
} from '../../../framework/framework';

export default class StatusDropdownExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedOption: undefined,
    };

    this.onSelectOption = this.onSelectOption.bind(this);

    this.options = [
      StatusDropdown.OPTIONS.ACTIVATE,
      StatusDropdown.OPTIONS.DEACTIVATE,
      StatusDropdown.OPTIONS.DELETE,
    ];
  }

  onSelectOption(option) {
    this.setState({
      selectedOption: option,
    });
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example>
          <StatusDropdown
            onSelect={this.onSelectOption}
            options={this.options}
            selectedOption={this.state.selectedOption}
          />
        </Example>

        <Example title="StatusDropdownOptionIcon ACTIVATE">
          <StatusDropdownOptionIcon
            type={StatusDropdownOptionIcon.TYPE.ACTIVATE}
          />
        </Example>

        <Example title="StatusDropdownOptionIcon DEACTIVATE">
          <StatusDropdownOptionIcon
            type={StatusDropdownOptionIcon.TYPE.DEACTIVATE}
          />
        </Example>

        <Example title="StatusDropdownOptionIcon DELETE">
          <StatusDropdownOptionIcon
            type={StatusDropdownOptionIcon.TYPE.DELETE}
          />
        </Example>

        <Example title="StatusDropdownOptionIcon SELECTED">
          <StatusDropdownOptionIcon
            type={StatusDropdownOptionIcon.TYPE.SELECTED}
          />
        </Example>

      </Page>
    );
  }

}

StatusDropdownExample.propTypes = {
  route: PropTypes.object.isRequired,
};
