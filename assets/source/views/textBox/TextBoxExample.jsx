
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  TextBox,
} from '../../../framework/framework';

export default class TextBoxExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example>
          <TextBox defaultValue="Default value" />
        </Example>

        <Example title="With placeholder text">
          <TextBox placeholder="Placeholder copy" />
        </Example>

        <Example title="With autoFocus">
          <TextBox autoFocus />
        </Example>

        <Example title="Error state">
          <TextBox isError />
        </Example>

        <Example title="Full width">
          <TextBox isFullWidth />
        </Example>

        <Example title="Resizable">
          <TextBox isResizable />
        </Example>

      </Page>
    );
  }

}
