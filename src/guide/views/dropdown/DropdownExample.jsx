
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Dropdown,
  DropdownDot,
  DropdownGroup,
} from '../../../framework/framework';

export default class DropdownExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDropdownOption: undefined,
    };

    this.dropdownItems = [{
      name: 'Apple',
    }, {
      name: 'Berry',
    }, {
      name: 'Corn',
    }, {
      name: 'Daffodil',
    }, {
      name: 'Eggplant',
    }, {
      name: 'Flour',
    }, {
      name: 'Gummy bear',
    }, {
      name: 'Hot sauce',
    }, {
      name: 'Ice',
    }, {
      name: 'Jelly',
    }, {
      name: 'Krispy treats',
    }, {
      name: 'Lemon',
    }];

    this.dropdownItemsAnimals = [{
      name: 'Anaconda',
    }, {
      name: 'Bear',
    }, {
      name: 'Cat',
    }, {
      name: 'Dog',
    }, {
      name: 'Elephant',
    }];

    this.dropdownItemsGroup = [this.dropdownItems, this.dropdownItemsAnimals];

    this.dropdownItemsClass = ['', 'dropdownLabel--red'];

    this.dropdownLabelProvider = option => (option ? option.name : 'Click me');

    this.dropdownOptionLabelProvider =
      option => (option ? option.name : undefined);

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

        <Example>
          <Dropdown
            labelProvider={this.dropdownLabelProvider}
            onSelect={this.onSelectDropdownOption}
            options={this.dropdownItems}
            optionLabelProvider={this.dropdownOptionLabelProvider}
            selectedOption={this.state.selectedDropdownOption}
          />
        </Example>

        <Example title="With group">
          <DropdownGroup
            labelProvider={this.dropdownLabelProvider}
            onSelect={this.onSelectDropdownOption}
            options={this.dropdownItemsGroup}
            optionGroupClasses={this.dropdownItemsClass}
            optionLabelProvider={this.dropdownOptionLabelProvider}
            selectedOption={this.state.selectedDropdownOption}
          />
        </Example>

        <Example title="With readonly">
          <Dropdown
            isReadonly
            labelProvider={this.dropdownLabelProvider}
            optionLabelProvider={this.dropdownOptionLabelProvider}
            onSelect={this.onSelectDropdownOption}
          />
        </Example>

        <Example title="Borderless">
          <Dropdown
            isBorderless
            labelProvider={this.dropdownLabelProvider}
            onSelect={this.onSelectDropdownOption}
            options={this.dropdownItems}
            optionLabelProvider={this.dropdownOptionLabelProvider}
            selectedOption={this.state.selectedDropdownOption}
          />
        </Example>

        <Example title="Borderless with dot">
          <Dropdown
            dotColor={DropdownDot.COLOR.GREEN}
            isBorderless
            labelProvider={this.dropdownLabelProvider}
            onSelect={this.onSelectDropdownOption}
            options={this.dropdownItems}
            optionLabelProvider={this.dropdownOptionLabelProvider}
            selectedOption={this.state.selectedDropdownOption}
          />
        </Example>

        <Example title="DropdownDot BLUE">
          <DropdownDot color={DropdownDot.COLOR.BLUE} />
        </Example>

        <Example title="DropdownDot GREEN">
          <DropdownDot color={DropdownDot.COLOR.GREEN} />
        </Example>

        <Example title="DropdownDot GREY">
          <DropdownDot color={DropdownDot.COLOR.GREY} />
        </Example>

        <Example title="DropdownDot RED">
          <DropdownDot color={DropdownDot.COLOR.RED} />
        </Example>

      </Page>
    );
  }

}

DropdownExample.propTypes = {
  route: PropTypes.object.isRequired,
};
