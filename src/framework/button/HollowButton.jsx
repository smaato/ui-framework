
import React from 'react';
import classNames from 'classnames';

import Button from './Button.jsx';

const HollowButton = (props) => {
  const classes = classNames('button--hollow', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

HollowButton.TYPE = Object.assign({}, Button.TYPE);

HollowButton.propTypes = Object.assign({}, Button.propTypes);

export default HollowButton;
