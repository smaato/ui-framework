
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  LabeledControl,
  TextInput,
  VerticalLayout,
} from '../../../framework/framework';

export default class LabelExample extends Component {

  constructor(props) {
    super(props);
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
      </Page>
    );
  }

}
