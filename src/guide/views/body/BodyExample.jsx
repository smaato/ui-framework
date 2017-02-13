
import React, {
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Body,
  BodyMaxWidthLayout,
  BodyPanel,
  BodyPanelItem,
} from '../../../framework/framework';

const BodyExample = props => (
  <Page title={props.route.name}>
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

    <Example>
      <Body isDark>
        <BodyPanel>
          <BodyPanelItem rhythm={BodyPanelItem.RHYTHM.LARGE}>
            This body component has isDark set and therefore has a dark
            background color.
          </BodyPanelItem>
        </BodyPanel>
      </Body>
    </Example>

    <Example title="BodyMaxWidthLayout" isClear>
      <Body>
        <BodyMaxWidthLayout>
          This is a BodyMaxWidthLayout.
        </BodyMaxWidthLayout>
      </Body>
    </Example>

    <Example title="BodyMaxWidthLayout with BodyPanel" isClear>
      <Body>
        <BodyMaxWidthLayout>
          <BodyPanel>
            This is a BodyMaxWidthLayout with a BodyPanel.
          </BodyPanel>
        </BodyMaxWidthLayout>
      </Body>
    </Example>

    <Example title="BodyPanel" isClear>
      <BodyPanel>
        This is a BodyPanel.
      </BodyPanel>
    </Example>

    <Example title="BodyPanel" isClear>
      <BodyPanel isTopFlush>
        This is a BodyPanel with isTopFlush (no border-top).
      </BodyPanel>
    </Example>

    <Example title="BodyPanel with rounded corners" isClear>
      <BodyPanel roundedCorners>
        This is a BodyPanel with rounded corners.
      </BodyPanel>
    </Example>
  </Page>
);

BodyExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default BodyExample;
