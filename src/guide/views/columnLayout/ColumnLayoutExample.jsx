
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
          <ColumnLayout
            left={
              <TextInput isFullWidth />
            }
            right={
              <TextInput isFullWidth />
            }
          />
        </Example>

        <Example title="Example of usage for Endpoint Settings">
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

        <Example title="ColumnLayout with 1/3 layout">
          <ColumnLayout
            layout={ColumnLayout.LAYOUT.ONE_THIRD}
            left={
              <TextInput isFullWidth />
            }
            right={
              <TextInput isFullWidth />
            }
          />
        </Example>

        <Example title="ColumnLayout with 2/3 layout">
          <ColumnLayout
            layout={ColumnLayout.LAYOUT.TWO_THIRDS}
            left={
              <TextInput isFullWidth />
            }
            right={
              <TextInput isFullWidth />
            }
          />
        </Example>

        <Example title="ColumnLayout with 1/4 layout">
          <ColumnLayout
            layout={ColumnLayout.LAYOUT.ONE_FOURTH}
            left={
              <TextInput isFullWidth />
            }
            right={
              <TextInput isFullWidth />
            }
          />
        </Example>

        <Example title="ColumnLayout with 1/5 layout">
          <ColumnLayout
            layout={ColumnLayout.LAYOUT.ONE_FIFTH}
            left={
              <TextInput isFullWidth />
            }
            right={
              <TextInput isFullWidth />
            }
          />
        </Example>

        <Example title="ColumnLayout with 2/5 layout">
          <ColumnLayout
            layout={ColumnLayout.LAYOUT.TWO_FIFTHS}
            left={
              <TextInput isFullWidth />
            }
            right={
              <TextInput isFullWidth />
            }
          />
        </Example>

        <Example title="ColumnLayout with 1/6 layout">
          <ColumnLayout
            layout={ColumnLayout.LAYOUT.ONE_SIXTH}
            left={
              <TextInput isFullWidth />
            }
            right={
              <TextInput isFullWidth />
            }
          />
        </Example>

        <Example
          title="4 column layout made by nesting ColumnLayout components"
        >
          <ColumnLayout
            layout={ColumnLayout.LAYOUT.ONE_FOURTH}
            left={
              <TextInput isFullWidth />
            }
            right={
              <ColumnLayout
                layout={ColumnLayout.LAYOUT.ONE_THIRD}
                left={
                  <TextInput isFullWidth />
                }
                right={
                  <ColumnLayout
                    layout={ColumnLayout.LAYOUT.ONE_HALF}
                    left={
                      <TextInput isFullWidth />
                    }
                    right={
                      <TextInput isFullWidth />
                    }
                  />
                }
              />
            }
          />
        </Example>
      </Page>
    );
  }

}
