
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  AddOnControl,
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
      backgroundColor: '#66b3ff',
    };

    return (
      <Page title={this.props.route.name}>

        <Example title="Example of usage for Endpoint Settings">
          <ColumnLayout
            layout={[
              ColumnLayout.LAYOUT.ONE_FIFTH,
              ColumnLayout.LAYOUT.HALF,
            ]}
          >
            <Label>EMEA Data Center</Label>
            <div>
              <LabeledField label="Endpoint URL">
                <TextInput isFullWidth />
              </LabeledField>
            </div>
            <div>
              <LabeledField label="QPS Limit">
                <AddOnControl right="queries per second">
                  <TextInput
                    placeholder="Unlimited"
                    isFullWidth
                  />
                </AddOnControl>
              </LabeledField>
            </div>
          </ColumnLayout>
        </Example>

        <Example title="1/3 - auto">
          <ColumnLayout
            layout={[
              ColumnLayout.LAYOUT.ONE_THIRD,
            ]}
          >
            <div style={backgroundColor}>one-third</div>
            <div style={backgroundColor}>auto</div>
          </ColumnLayout>
        </Example>

        <Example title="1/6 - 1/2 - auto">
          <ColumnLayout
            layout={[
              ColumnLayout.LAYOUT.ONE_SIXTH,
              ColumnLayout.LAYOUT.HALF,
            ]}
          >
            <div style={backgroundColor}>one-sixth</div>
            <div style={backgroundColor}>half</div>
            <div style={backgroundColor}>auto</div>
          </ColumnLayout>
        </Example>

        <Example title="1/3 - auto - 1/4">
          <ColumnLayout
            layout={[
              ColumnLayout.LAYOUT.ONE_THIRD,
              ColumnLayout.LAYOUT.AUTO,
              ColumnLayout.LAYOUT.ONE_FOURTH,
            ]}
          >
            <div style={backgroundColor}>one-third</div>
            <div style={backgroundColor}>auto</div>
            <div style={backgroundColor}>one-fourth</div>
          </ColumnLayout>
        </Example>

        <Example title="1/5 - 1/4 - auto - 2/5">
          <ColumnLayout
            layout={[
              ColumnLayout.LAYOUT.ONE_FIFTH,
              ColumnLayout.LAYOUT.ONE_FOURTH,
              ColumnLayout.LAYOUT.AUTO,
              ColumnLayout.LAYOUT.TWO_FIFTHS,
            ]}
          >
            <div style={backgroundColor}>one-fifth</div>
            <div style={backgroundColor}>one-fourth</div>
            <div style={backgroundColor}>auto</div>
            <div style={backgroundColor}>two-fifths</div>
          </ColumnLayout>
        </Example>

      </Page>
    );
  }

}
