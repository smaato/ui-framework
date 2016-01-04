
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Label,
  CheckBox,
} from '../../../framework/framework';

export default class LabelExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Label>Label</Label>
        </Example>

        <Example title="Clickable Label">
          <div>
            <Label htmlFor="checkboxExample">Label</Label>
          </div>
          <CheckBox id="checkboxExample" />
        </Example>
      </Page>
    );
  }

}
