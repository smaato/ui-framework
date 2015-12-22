
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import { CheckBox } from '../../../framework/framework';

export default class CheckBoxExample extends Component {

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
