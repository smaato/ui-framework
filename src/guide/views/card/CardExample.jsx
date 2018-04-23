
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  Card
} from '../../../framework/framework';

export default class CardExample extends Component {
  render() {
    return <Page title={this.props.route.name}>
      <Example>
        <Card />
      </Example>
    </Page>
  }
}
