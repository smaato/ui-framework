
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  SummaryControl,
  Icon,
} from '../../../framework/framework';

export default class SummaryControlExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <SummaryControl
            icon={<Icon className="glyphicons-ok-2"/>}
          >
            Include All Adspaces
          </SummaryControl>
        </Example>

        <Example title="Paperclip icon">
          <SummaryControl
            icon={<Icon className="glyphicons-paperclip"/>}
          >
            None Attached
          </SummaryControl>
        </Example>

        <Example title="No icon">
          <SummaryControl>
            No icon
          </SummaryControl>
        </Example>
      </Page>
    );
  }

}
