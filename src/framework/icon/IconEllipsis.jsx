
import React from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon.jsx';

const IconEllipsis = props => {
  const classes = classNames('glyphicons-more', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Icon {...extendedProps} />
  );
};

IconEllipsis.propTypes = Object.assign({}, Icon.propTypes);

export default IconEllipsis;
