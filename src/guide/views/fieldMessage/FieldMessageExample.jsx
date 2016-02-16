
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  FieldMessage,
  LabeledControl,
  TextInput,
} from '../../../framework/framework';

export default class FieldMessageExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example>
          <LabeledControl
            label="Name"
            layout={LabeledControl.LAYOUT.TWO_FIFTHS}
          >
            <TextInput
              isError
              isFullWidth
            />
            <FieldMessage>
              Please enter a name for this endpoint.
            </FieldMessage>
          </LabeledControl>
        </Example>

      </Page>
    );
  }

}
