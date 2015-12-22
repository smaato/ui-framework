
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Body,
  BodyPanel,
} from '../../../framework/framework';

export default class BodyExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Body>
            <BodyPanel>
              This Body component has a minimum height equal to that of the viewport.
            </BodyPanel>
          </Body>
        </Example>

        <Example title="BodyPanel" isClear>
          <BodyPanel>
            This is a BodyPanel.
          </BodyPanel>
        </Example>
      </Page>
    );
  }

}
