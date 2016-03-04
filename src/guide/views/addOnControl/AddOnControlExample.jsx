
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  AddOnControl,
  TextInput,
} from '../../../framework/framework';

class AddOnControlExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <AddOnControl
            left="$"
            right="USD"
          >
            <TextInput isFullWidth />
          </AddOnControl>
        </Example>

        <Example title="Left side">
          <AddOnControl
            left="$"
          >
            <TextInput isFullWidth />
          </AddOnControl>
        </Example>

        <Example title="Right side">
          <AddOnControl
            right="USD"
          >
            <TextInput isFullWidth />
          </AddOnControl>
        </Example>
      </Page>
    );
  }

}

AddOnControlExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default AddOnControlExample;
