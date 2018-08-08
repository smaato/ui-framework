
import React from 'react';
import PropTypes from 'prop-types';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  CheckBox,
  Label,
  SubLabel,
} from '../../../framework/framework';

const LabelExample = props => (
  <Page title={props.route.name}>
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

LabelExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default LabelExample;
