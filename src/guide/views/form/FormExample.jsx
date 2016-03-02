
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  BasicButton,
  Form,
  FormFooter,
  HollowButton,
  LabeledControl,
  PrimaryButton,
  TextInput,
  VerticalLayout,
} from '../../../framework/framework';

export default class FormExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Form
            data-id="data-id"
            body={
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
            }
          />
        </Example>

        <Example title="Form with footer">
          <Form
            data-id="data-id"
            body={(
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
            )}
            footer={
              <FormFooter
                left={[
                  <BasicButton
                    key="footer_left_1"
                    iconClasses="glyphicons-bin"
                    label="Delete"
                  />,
                ]}
                right={[
                  <HollowButton
                    key="footer_right_1"
                    label="Cancel"
                  />,
                  <PrimaryButton
                    key="footer_right_2"
                    label="Save"
                  />,
                ]}
              />
            }
          />
        </Example>

      </Page>
    );
  }

}
