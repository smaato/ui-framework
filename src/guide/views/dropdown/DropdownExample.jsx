
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Dropdown,
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
      name: 'Chippewa',
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

        <Example>
          <Dropdown
            options={this.dropdownItems}
            selectedOption={this.state.selectedDropdownOption}
            onSelect={this.onSelectDropdownOption}
            labelProvider={this.dropdownLabelProvider}
            optionLabelProvider={this.dropdownOptionLabelProvider}
          />
        </Example>

      </Page>
    );
  }

}

DropdownExample.propTypes = {
  route: PropTypes.object.isRequired,
};
