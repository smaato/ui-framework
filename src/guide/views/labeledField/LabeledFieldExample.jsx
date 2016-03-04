
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  AddOnControl,
  LabeledField,
  TextInput,
} from '../../../framework/framework';

class LabeledFieldExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

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
            <AddOnControl
              left="$"
              right="USD"
            >
              <TextInput isFullWidth />
            </AddOnControl>
          </LabeledField>
        </Example>

      </Page>
    );
  }

}

LabeledFieldExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default LabeledFieldExample;
