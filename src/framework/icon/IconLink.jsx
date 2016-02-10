
import React from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon.jsx';

const IconLink = props => {
  const classes = classNames('glyphicons-link', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Icon {...extendedProps} />
  );
};

IconLink.propTypes = Icon.propTypes;

export default IconLink;
