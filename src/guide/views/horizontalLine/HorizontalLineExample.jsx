
import React from 'react';
import PropTypes from 'prop-types';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  HorizontalLine,
} from '../../../framework/framework';

const HorizontalLineExample = props => (
  <Page title={props.route.name}>

    <Example>
      <HorizontalLine />
    </Example>

  </Page>
);

HorizontalLineExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default HorizontalLineExample;
