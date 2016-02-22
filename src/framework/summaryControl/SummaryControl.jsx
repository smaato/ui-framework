
import React, {
  PropTypes,
} from 'react';

import IconCog from '../icon/IconCog.jsx';

const SummaryControl = props => {
  return (
    <div
      className="summaryControl"
      onClick={props.onClick}
    >
      <span className="summaryControl__label">
        {props.icon}
        {props.children}
      </span>
      <IconCog className="summaryControl_iconCog" />
    </div>
  );
};

SummaryControl.propTypes = {
  icon: PropTypes.any,
  onClick: PropTypes.func,
};

export default SummaryControl;
