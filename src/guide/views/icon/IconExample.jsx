
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  SubTitle,
  Text,
  Title,
} from '../../components/page/Page.jsx';

import {
  Icon,
  IconCog,
  IconEllipsis,
} from '../../../framework/framework.js';

export default class IconExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>

        <Title>Icon</Title>

        <Example>
          <Icon className="glyphicons-cogwheel" />
        </Example>

        <Example>
          <SubTitle>IconEllipsis</SubTitle>
          <Text>Reveal additional options when the user clicks this icon.</Text>
          <IconEllipsis />
        </Example>


        <Example>
          <SubTitle>IconCog</SubTitle>
          <Text>Allows the user to edit settings when clicked.</Text>
          <IconCog />
        </Example>

      </Page>
    );
  }

}
