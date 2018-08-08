
import React from 'react';
import PropTypes from 'prop-types';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  CallOutButton,
  TitleBar,
} from '../../../framework/framework';

const TitleBarExample = props => (
  <Page title={props.route.name}>

    <Example isClear>
      <TitleBar
        label="Title bar example"
        buttons={[
          <CallOutButton id="firstButton" type={CallOutButton.TYPE.ADD}>
            Add something
          </CallOutButton>,
          <CallOutButton id="secondButton" type={CallOutButton.TYPE.ADD}>
            Add something else
          </CallOutButton>,
        ]}
      />
    </Example>

  </Page>
);

TitleBarExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default TitleBarExample;
