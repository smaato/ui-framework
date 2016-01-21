
import React, {
  PropTypes,
} from 'react';

import {
  IconCog,
} from '../icon/Icon.jsx';

const SummaryControl = props => {
  let icon;

  if (props.icon) {
    icon = (
      <span className="summaryControl__icon">
        {props.icon}
      </span>
    );
  }

  return (
    <div
      className="summaryControl"
      onClick={props.onClick}
    >
      <span className="summaryControl__label">
        {icon}
        {props.children}
      </span>
      <span className="summaryControl__cogIcon">
        <IconCog/>
      </span>
    </div>
  );
};

SummaryControl.propTypes = {
  icon: PropTypes.any,
  onClick: PropTypes.func,
};

export default SummaryControl;
