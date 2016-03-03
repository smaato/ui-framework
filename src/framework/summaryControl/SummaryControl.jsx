
import React, {
  PropTypes,
} from 'react';

import IconCog from '../icon/IconCog.jsx';

const SummaryControl = props => (
  <div
    className="summaryControl"
    onClick={props.onClick}
  >
    <span className="summaryControl__label">
      {props.icon}
      {props.children}
    </span>
    <IconCog classes="summaryControl_iconCog" />
  </div>
);

SummaryControl.propTypes = {
  icon: PropTypes.any,
  onClick: PropTypes.func,
};

export default SummaryControl;
