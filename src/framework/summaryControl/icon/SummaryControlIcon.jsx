
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const SummaryControlIcon = props => {
  const classes = classNames('summaryControlIcon', props.className);

  const icon = React.createElement(props.iconType, {
    className: classes,
  });

  return icon;
};

SummaryControlIcon.propTypes = {
  iconType: PropTypes.func,
};

export default SummaryControlIcon;
