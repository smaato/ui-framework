
import React from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon.jsx';

const IconCog = props => {
  const classes = classNames('glyphicons-cogwheel', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Icon {...extendedProps} />
  );
};

IconCog.propTypes = Object.assign({}, Icon.propTypes);

export default IconCog;
