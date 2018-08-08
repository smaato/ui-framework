
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Link,
} from '../../../framework/framework';

export default class LinkExample extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(data) {
    window.alert(data); // eslint-disable-line no-alert
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Link href="//www.google.com">Link to Google</Link>
        </Example>

        <Example title="With onClick callback">
          <Link
            onClick={this.onClick}
            data="Test"
          >
            Show alert
          </Link>
        </Example>

        <Example title="With target='_blank'">
          <Link
            href="//www.google.com"
            target="_blank"
          >
            Open Google in a new window
          </Link>
        </Example>
      </Page>
    );
  }

}

LinkExample.propTypes = {
  route: PropTypes.object.isRequired,
};
