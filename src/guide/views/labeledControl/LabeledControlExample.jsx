
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Dropdown,
  LabeledControl,
  LabeledField,
  TextArea,
  TextInput,
  VerticalLayout,
} from '../../../framework/framework';

export default class LabelExample extends Component {

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
        <Example>
          <LabeledControl label="Name">
            <TextInput isFullWidth />
          </LabeledControl>
        </Example>

        <Example title="LabeledControl with 2/5 layout">
          <VerticalLayout>
            <LabeledControl
              label="Name"
              layout={LabeledControl.LAYOUT.TWO_FIFTHS}
            >
              <TextInput isFullWidth />
            </LabeledControl>

            <LabeledControl
              label="Home address"
              layout={LabeledControl.LAYOUT.TWO_FIFTHS}
            >
              <TextInput isFullWidth />
            </LabeledControl>
          </VerticalLayout>
        </Example>

        <Example title="LabeledControl with 1/3 layout">
          <VerticalLayout>
            <LabeledControl
              label="Name"
              layout={LabeledControl.LAYOUT.ONE_THIRD}
            >
              <TextInput isFullWidth />
            </LabeledControl>

            <LabeledControl
              label="Home address"
              layout={LabeledControl.LAYOUT.ONE_THIRD}
            >
              <TextInput isFullWidth />
            </LabeledControl>
          </VerticalLayout>
        </Example>

        <Example title="LabeledControl with 1/4 layout">
          <VerticalLayout>
            <LabeledControl
              label="Name"
              layout={LabeledControl.LAYOUT.ONE_FOURTH}
            >
              <TextInput isFullWidth />
            </LabeledControl>

            <LabeledControl
              label="Home address"
              layout={LabeledControl.LAYOUT.ONE_FOURTH}
            >
              <TextInput isFullWidth />
            </LabeledControl>
          </VerticalLayout>
        </Example>

        <Example title="LabeledControl with 1/5 layout">
          <VerticalLayout>
            <LabeledControl
              label="Name"
              layout={LabeledControl.LAYOUT.ONE_FIFTH}
            >
              <TextInput isFullWidth />
            </LabeledControl>

            <LabeledControl
              label="Home address"
              layout={LabeledControl.LAYOUT.ONE_FIFTH}
            >
              <TextInput isFullWidth />
            </LabeledControl>
          </VerticalLayout>
        </Example>

        <Example title="LabeledControl with 1/6 layout">
          <VerticalLayout>
            <LabeledControl
              label="Name"
              layout={LabeledControl.LAYOUT.ONE_SIXTH}
            >
              <TextInput isFullWidth />
            </LabeledControl>

            <LabeledControl
              label="Home address"
              layout={LabeledControl.LAYOUT.ONE_SIXTH}
            >
              <TextInput isFullWidth />
            </LabeledControl>
          </VerticalLayout>
        </Example>

        <Example title="With Dropdown">
          <VerticalLayout>
            <LabeledControl
              label="Type"
              layout={LabeledControl.LAYOUT.ONE_SIXTH}
            >
              <LabeledField
                label="Select your choice"
              >
                <Dropdown
                  options={this.dropdownItems}
                  selectedOption={this.state.selectedDropdownOption}
                  onSelect={this.onSelectDropdownOption}
                  labelProvider={this.dropdownLabelProvider}
                  optionLabelProvider={this.dropdownOptionLabelProvider}
                />
              </LabeledField>
            </LabeledControl>
          </VerticalLayout>
        </Example>

        <Example title="With TextArea">
          <VerticalLayout>
            <LabeledControl
              label="Name"
              layout={LabeledControl.LAYOUT.ONE_SIXTH}
            >
              <TextArea isFullWidth />
            </LabeledControl>
          </VerticalLayout>
        </Example>

        <Example title="With LabeledField">
          <VerticalLayout>
            <LabeledControl
              label="Name"
              layout={LabeledControl.LAYOUT.ONE_SIXTH}
              withLabeledField
            >
              <LabeledField
                label="First"
              >
                <TextInput />
              </LabeledField>
            </LabeledControl>
          </VerticalLayout>
        </Example>
      </Page>
    );
  }

}

LabelExample.propTypes = {
  route: PropTypes.object.isRequired,
};
