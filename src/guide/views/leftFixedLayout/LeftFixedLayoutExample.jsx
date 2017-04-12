
import React, {
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  LeftFixedLayout,
} from '../../../framework/framework';

const LeftFixedLayoutExample = props => (
  <Page title={props.route.name}>

    <Example>
      <LeftFixedLayout
        left={(
          <div style={{ backgroundColor: '#f0f0f0' }}>left</div>
        )}
        right={(
          <div style={{ height: 1000, backgroundColor: '#f0f0f0' }}>
            right
          </div>
        )}
      />
    </Example>

  </Page>
);

LeftFixedLayoutExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default LeftFixedLayoutExample;
