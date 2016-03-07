
import React from 'react';
import classNames from 'classnames';

import Button from './Button.jsx';

const BasicButton = props => {
  const classes = classNames('button--basic', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

BasicButton.propTypes = Object.assign({}, Button.propTypes);

export default BasicButton;
