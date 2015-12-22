
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  Icon,
  IconCog,
  IconEllipsis,
} from '../../../framework/framework';

export default class IconExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example>
          <Icon className="glyphicons-cogwheel" />
        </Example>

        <Example title="IconEllipsis">
          <Text>Reveal additional options when the user clicks this icon.</Text>
          <IconEllipsis />
        </Example>


        <Example title="IconCog">
          <Text>Allows the user to edit settings when clicked.</Text>
          <IconCog />
        </Example>

      </Page>
    );
  }

}
