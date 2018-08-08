
import React from 'react';
import PropTypes from 'prop-types';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  TextArea,
} from '../../../framework/framework';

const TextAreaExample = props => (
  <Page title={props.route.name}>

    <Example>
      <TextArea defaultValue="Default value" />
    </Example>

    <Example title="With placeholder text">
      <TextArea placeholder="Placeholder copy" />
    </Example>

    <Example title="With autoFocus">
      <TextArea autoFocus />
    </Example>

    <Example title="Error state">
      <TextArea isError />
    </Example>

    <Example title="Full width">
      <TextArea isFullWidth />
    </Example>

    <Example title="Resizable">
      <TextArea isResizable dataId="asd" />
    </Example>

  </Page>
);

TextAreaExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default TextAreaExample;
