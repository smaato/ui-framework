
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  AddOnControl,
  ColumnLayout,
  LabeledControl,
  LabeledField,
  TextInput,
} from '../../../framework/framework';

export default class ColumnLayoutExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <LabeledControl
            label="EMEA Data Center"
            layout={LabeledControl.LAYOUT.ONE_SIXTH}
          >
            <ColumnLayout
              layout={ColumnLayout.LAYOUT.TWO_THIRDS}
              left={
                <LabeledField
                  label="Endpoint URL"
                >
                  <TextInput isFullWidth />
                </LabeledField>
              }
              right={
                <LabeledField
                  label="QPS Limit"
                >
                  <AddOnControl
                    right="queries per second"
                  >
                    <TextInput
                      placeholder="Unlimited"
                      isFullWidth
                    />
                  </AddOnControl>
                </LabeledField>
              }
            />
          </LabeledControl>
        </Example>
      </Page>
    );
  }

}
