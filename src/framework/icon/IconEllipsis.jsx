
import React from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon.jsx';

const IconEllipsis = props => {
  const classes = classNames('glyphicons-more', props.className);

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <Icon {...extendedProps} />
  );
};

IconEllipsis.propTypes = Icon.propTypes;

export default IconEllipsis;
