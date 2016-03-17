
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
    return (
      <Page title={this.props.route.name}>
        <Example title="Allowed">
          <PickedSummary isAllowed>
            This is allowed
          </PickedSummary>
        </Example>

        <Example title="Now allowed">
          <PickedSummary isAllowed={false}>
            This is not allowed
          </PickedSummary>
        </Example>
      </Page>
    );
  }

}

PickedListExample.propTypes = {
  route: PropTypes.object.isRequired,
};
