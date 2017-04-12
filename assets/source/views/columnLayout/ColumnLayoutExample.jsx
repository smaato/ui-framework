
import React, {
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  AddOnControl,
  AddOnLabel,
  Column,
  ColumnLayout,
  Label,
  LabeledField,
  TextInput,
} from '../../../framework/framework';

const ColumnLayoutExample = (props) => {
  const backgroundColor = {
    backgroundColor: '#f0f0f0',
  };
  const widths = [1, 2, 3, 4, 5, 6];
  const columns = widths.map((width) => {
    const otherWidth = 12 - width;
    return (
      <div style={{ marginBottom: 10 }} key={width}>
        <ColumnLayout>
          <Column width={width}>
            <div style={backgroundColor}>{width}</div>
          </Column>
          <Column width={otherWidth}>
            <div style={backgroundColor}>{otherWidth}</div>
          </Column>
        </ColumnLayout>
      </div>
    );
  });

  return (
    <Page title={props.route.name}>

      <Example title="Column widths">
        {columns}
      </Example>

      <Example title="Form">
        <ColumnLayout>
          <Column width={2}>
            <Label isAlignedWithField>Label</Label>
          </Column>
          <Column width={6}>
            <TextInput isFullWidth />
          </Column>
          <Column width={4}>
            <AddOnControl>
              <TextInput isFullWidth />
              <AddOnLabel isRightSide>unit</AddOnLabel>
            </AddOnControl>
          </Column>
        </ColumnLayout>
      </Example>

      <Example title="Form with LabeledField">
        <ColumnLayout>
          <Column width={2}>
            <Label isAlignedWithLabeledField>Label</Label>
          </Column>
          <Column width={6}>
            <LabeledField label="Labeled text input">
              <TextInput isFullWidth />
            </LabeledField>
          </Column>
          <Column width={4}>
            <LabeledField label="Labeled text input with AddOnLabel">
              <AddOnControl>
                <TextInput isFullWidth />
                <AddOnLabel isRightSide>unit</AddOnLabel>
              </AddOnControl>
            </LabeledField>
          </Column>
        </ColumnLayout>
      </Example>

    </Page>
  );
};

ColumnLayoutExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default ColumnLayoutExample;
