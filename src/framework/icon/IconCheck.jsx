
import React from 'react';
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

IconCheck.propTypes = Icon.propTypes;

export default IconCheck;
