
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  ColumnLayout,
} from '../../../framework/framework';

export default class ColumnLayoutExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <ColumnLayout />
        </Example>
      </Page>
    );
  }

}
