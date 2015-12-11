
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  TextInput,
} from '../../../framework/framework.js';

export default class TextInputExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example>
          <TextInput defaultValue="Default value" />
        </Example>

        <Example title="TextInput with placeholder text">
          <TextInput placeholder="Placeholder copy" />
        </Example>

        <Example title="TextInput with autoFocus">
          <TextInput autoFocus />
        </Example>

        <Example title="TextInput as password">
          <TextInput type="password" defaultValue="Default value"/>
        </Example>

      </Page>
    );
  }

}
