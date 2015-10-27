
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  SubTitle,
  Title,
} from '../../components/page/Page.jsx';

import {
  TitleBar,
  TitleBarButton,
} from '../../../framework/framework.js';

export default class TitleBarExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>

        <Title>TitleBar</Title>

        <Example isClear>

          <TitleBar
            label="Title bar example"
            buttons={[
              <TitleBarButton
                label="Add something"
                key="button1"
              />,
              <TitleBarButton
                label="Add something else"
                key="button2"
              />,
            ]}
          />

        </Example>

        <Example>

          <SubTitle>TitleBarButton</SubTitle>

          <TitleBarButton
            label="Title bar button"
          />

        </Example>

      </Page>
    );
  }

}
