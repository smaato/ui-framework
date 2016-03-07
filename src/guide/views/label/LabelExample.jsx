
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  CheckBox,
  Label,
  SubLabel,
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

        <Example title="SubLabel">
          <Label>Label</Label>
          <SubLabel>Sub-label</SubLabel>
        </Example>
      </Page>
    );
  }

}

LabelExample.propTypes = {
  route: PropTypes.object.isRequired,
};
