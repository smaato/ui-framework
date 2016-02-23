
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  LabeledField,
  TextInput,
} from '../../../framework/framework';

export default class LabeledFieldExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example>
          <LabeledField
            label="Request"
          >
            <TextInput />
          </LabeledField>
        </Example>

      </Page>
    );
  }

}
