
import React, {
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  AddOnControl,
  AddOnLabel,
  LabeledField,
  TextInput,
} from '../../../framework/framework';

const LabeledFieldExample = props => (
  <Page title={props.route.name}>

    <Example title="With TextInput">
      <LabeledField
        label="Request"
      >
        <TextInput />
      </LabeledField>
    </Example>

    <Example title="With AddOnControl">
      <LabeledField
        label="Price"
      >
        <AddOnControl>
          <AddOnLabel isLeftSide>$</AddOnLabel>
          <TextInput isFullWidth />
          <AddOnLabel isRightSide>USD</AddOnLabel>
        </AddOnControl>
      </LabeledField>
    </Example>

  </Page>
);

LabeledFieldExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default LabeledFieldExample;
