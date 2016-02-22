
import React from 'react';
import classNames from 'classnames';

import Button from './Button.jsx';

const BasicButton = props => {
  const classes = classNames('button--basic', props.className);

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

BasicButton.propTypes = Button.propTypes;

export default BasicButton;
