
import React, {
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import { Tooltip } from '../../../framework/framework';

const TooltipExample = props => (
  <Page title={props.route.name}>

    <Example>
      <Tooltip
        width="200px"
        message="This is a text to display in the tooltip"
      >
      Hover me
      </Tooltip>
    </Example>

  </Page>
);

TooltipExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default TooltipExample;
