
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  AddOnControl,
  AddOnDropdown,
  AddOnLabel,
  TextInput,
} from '../../../framework/framework';

class AddOnControlExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDropdownOption: undefined,
    };

    this.dropdownItems = [{
      name: 'Apache',
    }, {
      name: 'Blackfeet',
    }, {
      name: 'Chippewa',
    }];

    this.dropdownLabelProvider = option => option ? option.name : 'Click me';

    this.dropdownOptionLabelProvider =
      option => option ? option.name : undefined;

    this.onSelectDropdownOption = this.onSelectDropdownOption.bind(this);
  }

  onSelectDropdownOption(option) {
    this.setState({
      selectedDropdownOption: option,
    });
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example title="With AddOnLabel">
          <AddOnControl>
            <AddOnLabel isLeftSide>$</AddOnLabel>
            <TextInput isFullWidth />
            <AddOnLabel isRightSide>USD</AddOnLabel>
          </AddOnControl>
        </Example>

        <Example title="Left side">
          <AddOnControl>
            <AddOnLabel isLeftSide>$</AddOnLabel>
            <TextInput isFullWidth />
          </AddOnControl>
        </Example>

        <Example title="Right side">
          <AddOnControl>
            <TextInput isFullWidth />
            <AddOnLabel isRightSide>USD</AddOnLabel>
          </AddOnControl>
        </Example>

        <Example title="With AddOnDropdown">
          <AddOnControl>
            <AddOnDropdown
              options={this.dropdownItems}
              selectedOption={this.state.selectedDropdownOption}
              onSelect={this.onSelectDropdownOption}
              labelProvider={this.dropdownLabelProvider}
              optionLabelProvider={this.dropdownOptionLabelProvider}
              isLeftSide
            />
            <TextInput isFullWidth />
            <AddOnDropdown
              options={this.dropdownItems}
              selectedOption={this.state.selectedDropdownOption}
              onSelect={this.onSelectDropdownOption}
              labelProvider={this.dropdownLabelProvider}
              optionLabelProvider={this.dropdownOptionLabelProvider}
              isRightSide
            />
          </AddOnControl>
        </Example>
      </Page>
    );
  }

}

AddOnControlExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default AddOnControlExample;
