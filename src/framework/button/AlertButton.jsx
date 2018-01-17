
import classNames from 'classnames';
import React from 'react';

import Button from './Button.jsx';

const AlertButton = (props) => {
  const classes = classNames('button--alert', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

AlertButton.TYPE = Object.assign({}, Button.TYPE);

AlertButton.propTypes = Object.assign({}, Button.propTypes);

export default AlertButton;
