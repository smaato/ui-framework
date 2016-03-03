
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  AddOnControl,
  Column,
  ColumnLayout,
  Label,
  LabeledField,
  TextInput,
} from '../../../framework/framework';

export default class ColumnLayoutExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const backgroundColor = {
      backgroundColor: '#f0f0f0',
    };

    return (
      <Page title={this.props.route.name}>

        <Example title="Example of usage for Endpoint Settings">
          <ColumnLayout>
            <Column width={3}>
              <Label>EMEA Data Center</Label>
            </Column>
            <Column width={6}>
              <LabeledField label="Endpoint URL">
                <TextInput isFullWidth />
              </LabeledField>
            </Column>
            <Column width={3}>
              <LabeledField label="QPS Limit">
                <AddOnControl right="queries per second">
                  <TextInput
                    placeholder="Unlimited"
                    isFullWidth
                  />
                </AddOnControl>
              </LabeledField>
            </Column>
          </ColumnLayout>
        </Example>

        <Example title="4/12th - 8/12th">
          <ColumnLayout>
            <Column width={4}>
              <div style={backgroundColor}>4/12th</div>
            </Column>
            <Column width={8}>
              <div style={backgroundColor}>8/12th</div>
            </Column>
          </ColumnLayout>
        </Example>

        <Example title="2/12th - 6/12th - 4/12th">
          <ColumnLayout>
            <Column width={2}>
              <div style={backgroundColor}>2/12th</div>
            </Column>
            <Column width={6}>
              <div style={backgroundColor}>6/12th</div>
            </Column>
            <Column width={4}>
              <div style={backgroundColor}>4/12th</div>
            </Column>
          </ColumnLayout>
        </Example>

      </Page>
    );
  }

}
