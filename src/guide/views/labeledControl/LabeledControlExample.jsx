
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  LabeledControl,
  LabeledField,
  TextArea,
  TextInput,
  VerticalLayout,
} from '../../../framework/framework';

class LabelExample extends Component {

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

export default LabelExample;
