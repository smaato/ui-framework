
import React from 'react';
import classNames from 'classnames';

import Button from './Button.jsx';

const PrimaryButton = props => {
  const classes = classNames('button--primary', props.className);

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

PrimaryButton.propTypes = Button.propTypes;

export default PrimaryButton;
