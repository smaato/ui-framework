
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  CtaButton,
  TitleBar,
} from '../../../framework/framework.js';

export default class TitleBarExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example isClear>
          <TitleBar
            label="Title bar example"
            buttons={[
              <CtaButton
                iconClasses="glyphicons-plus"
                label="Add something"
                key="button1"
              />,
              <CtaButton
                iconClasses="glyphicons-plus"
                label="Add something else"
                key="button2"
              />,
            ]}
          />
        </Example>

      </Page>
    );
  }

}
