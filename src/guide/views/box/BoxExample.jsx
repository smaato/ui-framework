
import React from 'react';
import PropTypes from 'prop-types';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Box,
} from '../../../framework/framework';

const BoxExample = props => (
  <Page title={props.route.name}>
    <Example title="Box with plain corners">
      <Box>
        This is a simple box.
      </Box>
    </Example>
    <Example title="Box with rounded corners">
      <Box roundedCorners>
        This is a simple box with rounded corners.
      </Box>
    </Example>
  </Page>
);

BoxExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default BoxExample;
