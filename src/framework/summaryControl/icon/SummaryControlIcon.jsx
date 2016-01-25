
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

import Icon from '../../icon/Icon.jsx';

const SummaryControlIcon = props => {
  const classes = classNames('summaryControlIcon', props.classes);

  const icon = React.createElement(props.iconType, {
    classes: classes,
  });

  return icon;
};

SummaryControlIcon.propTypes = {
  classes: Icon.propTypes.classes,
  iconType: PropTypes.func,
};

export default SummaryControlIcon;
