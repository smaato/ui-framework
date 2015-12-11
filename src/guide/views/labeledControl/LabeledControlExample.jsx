
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  LabeledControl,
  LabeledControlContainer,
  TextInput,
} from '../../../framework/framework.js';

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

        <Example title="LabeledControlContainer with 2/5 layout">
          <LabeledControlContainer>
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
          </LabeledControlContainer>
        </Example>

        <Example title="LabeledControlContainer with 1/3 layout">
          <LabeledControlContainer>
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
          </LabeledControlContainer>
        </Example>

        <Example title="LabeledControlContainer with 1/4 layout">
          <LabeledControlContainer>
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
          </LabeledControlContainer>
        </Example>

        <Example title="LabeledControlContainer with 1/5 layout">
          <LabeledControlContainer>
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
          </LabeledControlContainer>
        </Example>

        <Example title="LabeledControlContainer with 1/6 layout">
          <LabeledControlContainer>
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
          </LabeledControlContainer>
        </Example>
      </Page>
    );
  }

}
