
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  FieldError,
  LabeledControl,
  TextInput,
} from '../../../framework/framework';

export default class FieldErrorExample extends Component {

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
            <FieldError>
              Please enter a name for this endpoint.
            </FieldError>
          </LabeledControl>
        </Example>

      </Page>
    );
  }

}
