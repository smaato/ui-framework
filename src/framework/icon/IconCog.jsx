
import React from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon.jsx';

const IconCog = props => {
  const classes = classNames('glyphicons-cogwheel', props.className);

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <Icon {...extendedProps} />
  );
};

IconCog.propTypes = Icon.propTypes;

export default IconCog;
