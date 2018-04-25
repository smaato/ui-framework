
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
        <Card
          imageSrc='http://pipsum.com/210x150.jpg'
          title='This is a title'
          subtitle='This is a subtitle'
          description='BOOM BOOM BOOM'
          hightlightText='Highlight'
          tooltipText='BOOM!'
          width='200px'
          height='300px'
        />
      </Example>
    </Page>
  }
}
