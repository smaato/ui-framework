
import React from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon.jsx';

const IconAsterisk = props => {
  const classes = classNames('glyphicons-asterisk', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Icon {...extendedProps} />
  );
};

IconAsterisk.propTypes = Object.assign({}, Icon.propTypes);

export default IconAsterisk;
