
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  HorizontalLine,
} from '../../../framework/framework';

export default class HorizontalLineExample extends Component {

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example>
          <HorizontalLine />
        </Example>

      </Page>
    );
  }

}

HorizontalLineExample.propTypes = {
  route: PropTypes.object.isRequired,
};
