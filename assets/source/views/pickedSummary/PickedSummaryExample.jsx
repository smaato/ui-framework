
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  PickedSummary,
} from '../../../framework/framework';

export default class PickedListExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const examples = Object.keys(PickedSummary.TYPE).map(key =>
      <Example
        title={key}
        key={key}
      >
        <PickedSummary type={PickedSummary.TYPE[key]}>
          {key}
        </PickedSummary>
      </Example>
    );

    return (
      <Page title={this.props.route.name}>
        {examples}
      </Page>
    );
  }

}

PickedListExample.propTypes = {
  route: PropTypes.object.isRequired,
};
