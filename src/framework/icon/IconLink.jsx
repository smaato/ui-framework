
import React from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon.jsx';

const IconLink = props => {
  const classes = classNames('glyphicons-link', props.className);

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <Icon {...extendedProps} />
  );
};

IconLink.propTypes = Icon.propTypes;

export default IconLink;
