
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import { CheckBox } from '../../../framework/framework';

class CheckBoxExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <CheckBox id="checkboxExample" />
        </Example>
      </Page>
    );
  }

}

CheckBoxExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default CheckBoxExample;
