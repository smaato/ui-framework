
import React, {
  PropTypes,
} from 'react';

import Icon from '../../icon/Icon.jsx';

const GridIcon = props => {
  // Create an instance of the provided Icon component, with the gridIcon class.
  const icon = React.createElement(props.iconType, {
    classes: 'gridIcon',
    onClick: props.onClick,
  });

  return icon;
};

GridIcon.propTypes = {
  iconType: PropTypes.func,
  onClick: Icon.propTypes.onClick,
};

export default GridIcon;
