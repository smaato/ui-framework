
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  AddOnControl,
  AddOnSelect,
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
            <TextInput isFullWidth />
          </AddOnControl>
        </Example>

        <Example title="Left side">
          <AddOnControl
            left="$"
          >
            <TextInput isFullWidth />
          </AddOnControl>
        </Example>

        <Example title="Right side">
          <AddOnControl
            right="USD"
          >
            <TextInput isFullWidth />
          </AddOnControl>
        </Example>

        <Example title="AddOnSelect">
          <AddOnControl
            right={
              <AddOnSelect>
                <option value="A">Apple</option>
                <option value="B">Banana</option>
                <option value="C">Cranberry</option>
              </AddOnSelect>
            }
          >
            <TextInput isFullWidth />
          </AddOnControl>
        </Example>
      </Page>
    );
  }

}
