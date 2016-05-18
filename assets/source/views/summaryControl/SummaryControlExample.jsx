
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  SummaryControl,
} from '../../../framework/framework';

export default class SummaryControlExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const types = Object.keys(SummaryControl.TYPE).map(key =>
      <div
        style={{ marginBottom: 20 }}
        key={key}
      >
        <SummaryControl type={SummaryControl.TYPE[key]}>
          {key}
        </SummaryControl>
      </div>
    );

    return (
      <Page title={this.props.route.name}>
        <Example>
          {types}
        </Example>

        <Example title="Labels that are too long will be truncated">
          <div style={{ width: '150px' }}>
            <SummaryControl type={SummaryControl.TYPE.ALLOWED}>
              This label is truncated because it is too long
            </SummaryControl>
          </div>
        </Example>

        <Example title="Static">
          <SummaryControl
            type={SummaryControl.TYPE.ALLOWED}
            isStatic
          >
            This summary control isn't clickable
          </SummaryControl>
        </Example>
      </Page>
    );
  }

}

SummaryControlExample.propTypes = {
  route: PropTypes.object.isRequired,
};
