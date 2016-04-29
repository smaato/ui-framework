
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Heading,
} from '../../../framework/framework';

export default class HeadingExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example title="Heading">
          <Heading>This is heading text.</Heading>
        </Example>

      </Page>
    );
  }

}

HeadingExample.propTypes = {
  route: PropTypes.object.isRequired,
};
