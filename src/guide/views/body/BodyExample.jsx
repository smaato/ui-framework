
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Body,
  BodyPanel,
  BodyPanelItem,
} from '../../../framework/framework';

class BodyExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Body>
            <BodyPanel>
              <BodyPanelItem rhythm={BodyPanelItem.RHYTHM.LARGE}>
                This Body component has a minimum height equal to that of
                the viewport.
              </BodyPanelItem>

              <BodyPanelItem rhythm={BodyPanelItem.RHYTHM.LARGE}>
                These paragraphs are spaced apart by BodyPanelItem components.
              </BodyPanelItem>
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

BodyExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default BodyExample;
