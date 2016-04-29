
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  TextInput,
} from '../../../framework/framework';

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

        <Example title="With placeholder text">
          <TextInput placeholder="Placeholder copy" />
        </Example>

        <Example title="With autoFocus">
          <TextInput autoFocus />
        </Example>

        <Example title="Error state">
          <TextInput isError />
        </Example>

        <Example title="As password">
          <TextInput type="password" defaultValue="Default value"/>
        </Example>

        <Example title="Full width">
          <TextInput isFullWidth />
        </Example>

      </Page>
    );
  }

}

TextInputExample.propTypes = {
  route: PropTypes.object.isRequired,
};
