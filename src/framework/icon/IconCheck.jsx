
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon.jsx';

const IconCheck = props => {
  const classes = classNames('glyphicons-ok-2', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Icon {...extendedProps} />
  );
};

IconCheck.propTypes = Object.assign(Icon.propTypes, {
  classes: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
});

export default IconCheck;
