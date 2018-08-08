
import React from 'react';
import PropTypes from 'prop-types';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Alert,
  Text,
} from '../../../framework/framework';

const AlertExample = props => (
  <Page title={props.route.name}>

    <Example title="Type SUCCESS">
      <Alert type={Alert.TYPE.SUCCESS}>
        <Text>
          <span style={{ color: 'white' }}>
            Success message
          </span>
        </Text>
      </Alert>
    </Example>

    <Example title="Type INFO">
      <Alert type={Alert.TYPE.INFO}>
        <Text>
          <span style={{ color: 'white' }}>
            Info message
          </span>
        </Text>
      </Alert>
    </Example>

    <Example title="Type WARNING">
      <Alert type={Alert.TYPE.WARNING}>
        <Text>
          Warning message
        </Text>
      </Alert>
    </Example>

    <Example title="Type ERROR">
      <Alert type={Alert.TYPE.ERROR}>
        <Text>
          <span style={{ color: 'white' }}>
            Error message
          </span>
        </Text>
      </Alert>
    </Example>

  </Page>
);

AlertExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default AlertExample;
