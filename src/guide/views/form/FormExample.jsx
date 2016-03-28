
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  BasicButton,
  Dropdown,
  Form,
  FormFooter,
  FormPanel,
  HollowButton,
  LabeledControl,
  PrimaryButton,
  TextInput,
  VerticalLayout,
} from '../../../framework/framework';

export default class FormExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDropdownOption: undefined,
    };

    this.dropdownItems = [{
      name: 'Red',
    }, {
      name: 'Green',
    }, {
      name: 'Blue',
    }];

    this.dropdownLabelProvider = option => option ? option.name : 'Click me';

    this.dropdownOptionLabelProvider =
      option => option ? option.name : undefined;

    this.onCancel = this.onCancel.bind(this);
    this.onSelectDropdownOption = this.onSelectDropdownOption.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onCancel(event) {
    event.preventDefault();
    window.alert('Cancel form'); // eslint-disable-line no-alert
  }

  onSelectDropdownOption(option) {
    this.setState({
      selectedDropdownOption: option,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    window.alert('Submit form'); // eslint-disable-line no-alert
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <FormPanel>
            <Form
              dataId="data-id"
              onSubmit={this.onSubmit}
            >
              <VerticalLayout>
                <LabeledControl
                  label="First Name"
                  layout={LabeledControl.LAYOUT.ONE_SIXTH}
                >
                  <TextInput isFullWidth />
                </LabeledControl>
                <LabeledControl
                  label="Last Name"
                  layout={LabeledControl.LAYOUT.ONE_SIXTH}
                >
                  <TextInput isFullWidth />
                </LabeledControl>
              </VerticalLayout>
            </Form>
          </FormPanel>
        </Example>

        <Example title="Form with footer">
          <FormPanel>
            <Form
              dataId="data-id"
              onSubmit={this.onSubmit}
            >
              <VerticalLayout>
                <LabeledControl
                  label="Name"
                  layout={LabeledControl.LAYOUT.ONE_SIXTH}
                >
                  <TextInput isFullWidth />
                </LabeledControl>
                <LabeledControl
                  label="Favorite color"
                  layout={LabeledControl.LAYOUT.ONE_SIXTH}
                >
                  <Dropdown
                    options={this.dropdownItems}
                    selectedOption={this.state.selectedDropdownOption}
                    onSelect={this.onSelectDropdownOption}
                    labelProvider={this.dropdownLabelProvider}
                    optionLabelProvider={this.dropdownOptionLabelProvider}
                  />
                </LabeledControl>
              </VerticalLayout>
              <FormFooter
                left={[
                  <BasicButton key="footer_left_1">
                    Delete
                  </BasicButton>,
                ]}
                right={[
                  <HollowButton key="footer_right_1">
                    Cancel
                  </HollowButton>,
                  <PrimaryButton
                    key="footer_right_2"
                    onClick={this.onSubmit}
                  >
                    Save
                  </PrimaryButton>,
                ]}
              />
            </Form>
          </FormPanel>
        </Example>

      </Page>
    );
  }

}

FormExample.propTypes = {
  route: PropTypes.object.isRequired,
};
