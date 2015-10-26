
import React from 'react';
import renderComponent from '../../renderComponent.js';
import { TitleBar, TitleBarButton } from '../../../framework/index.js';

export default function() {
  renderComponent('titleBar', (
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
  ));

  renderComponent('titleBarButton', (
    <TitleBarButton
      label="Title bar button"
    />
  ));
}
