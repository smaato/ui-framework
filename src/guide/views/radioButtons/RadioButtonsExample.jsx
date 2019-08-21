
import React from 'react';
import PropTypes from 'prop-types';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  RadioButtons,
} from '../../../framework/framework';

const RadioButtonsExample = (props) => {
  const elements = [
    {
      label: 'Label 1',
      value: 1,
    },
    {
      label: 'Label 2',
      value: 2,
    },
    {
      label: 'Label 3',
      value: 3,
    },
  ];

  const onSelect = () => null;

  return (
    <Page title={props.route.name}>
      <Example title="RadioButtons">
        <RadioButtons
          elements={elements}
          onSelect={onSelect}
          name="radioButtons"
        />
      </Example>

      <Example title="RadioButtons with something selected">
        <RadioButtons
          elements={elements}
          onSelect={onSelect}
          name="radioButtonsWithPreselection"
          selectedElement={elements[1]}
        />
      </Example>
    </Page>
  );
};

RadioButtonsExample.propTypes = {
  route: PropTypes.any,
};

export default RadioButtonsExample;
