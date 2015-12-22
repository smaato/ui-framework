
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  AddOnControl,
  TextInput,
} from '../../../framework/framework';

export default class AddOnControlExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <AddOnControl
            left="$"
            right="USD"
          >
            <TextInput />
          </AddOnControl>
        </Example>

        <Example title="Left side">
          <AddOnControl
            left="$"
          >
            <TextInput />
          </AddOnControl>
        </Example>

        <Example title="Right side">
          <AddOnControl
            right="USD"
          >
            <TextInput />
          </AddOnControl>
        </Example>
      </Page>
    );
  }

}
