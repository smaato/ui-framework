
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Box,
} from '../../../framework/framework';

export default class BoxExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Box>
            This is a simple box with rounded corners.
          </Box>
        </Example>
      </Page>
    );
  }

}

BoxExample.propTypes = {
  route: PropTypes.object.isRequired,
};
