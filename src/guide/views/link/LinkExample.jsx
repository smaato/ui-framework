
import React, {
  Component,
} from 'react';

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

  onClick() {
    console.log('hello'); // eslint-disable-line no-console
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Link href="//www.google.com">Link to Google</Link>
        </Example>

        <Example title="With onClick callback">
          <Link onClick={this.onClick}>console.log('hello')</Link>
        </Example>
      </Page>
    );
  }

}
