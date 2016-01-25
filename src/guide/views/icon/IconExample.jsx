
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
    function onClick() {
      console.log('Clicked icon.'); // eslint-disable-line no-console
    }

    return (
      <Page title={this.props.route.name}>

        <Example>
          <Text>Icons can be clickable.</Text>
          <Icon
            classes="glyphicons-cogwheel"
            onClick={onClick}
          />
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
