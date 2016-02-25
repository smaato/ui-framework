
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Form,
  LabeledControl,
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
      </Page>
    );
  }

}
