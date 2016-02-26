
import React from 'react';
import classNames from 'classnames';

import Button from './Button.jsx';

const HollowButton = props => {
  const classes = classNames('button--hollow', props.className);

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

HollowButton.propTypes = Button.propTypes;

export default HollowButton;
