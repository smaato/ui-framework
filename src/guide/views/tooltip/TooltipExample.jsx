
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
      hi LALALALALALAALALALALAALALALALAALALALAALALALAL
      <div> lelelelele</div>
      <Tooltip
        width="200px"
        message="lelele lalalal lolo I just want to have a super long text"
      >
      Paco!
      </Tooltip>
    </Example>

  </Page>
);

TooltipExample.propTypes = {
  route: PropTypes.object.isRequired,
};

export default TooltipExample;
