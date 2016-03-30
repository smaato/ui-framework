
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
    const examples = Object.keys(SummaryControl.TYPE).map(key =>
      <Example
        title={key}
        key={key}
      >
        <SummaryControl type={SummaryControl.TYPE[key]}>
          {key}
        </SummaryControl>
      </Example>
    );

    return (
      <Page title={this.props.route.name}>
        {examples}
      </Page>
    );
  }

}

SummaryControlExample.propTypes = {
  route: PropTypes.object.isRequired,
};
