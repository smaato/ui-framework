
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  StatusDot,
} from '../../../framework/framework';

export default class StatusDotExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example title="Negative">
          <StatusDot status={StatusDot.STATUS.NEGATIVE} />
        </Example>

        <Example title="Positive">
          <StatusDot status={StatusDot.STATUS.POSITIVE} />
        </Example>

      </Page>
    );
  }

}

StatusDotExample.propTypes = {
  route: PropTypes.object.isRequired,
};
