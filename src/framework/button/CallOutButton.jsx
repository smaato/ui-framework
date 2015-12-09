
import React from 'react';
import classNames from 'classnames';

import Button from './Button.jsx';

const CallOutButton = props => {
  const classes = classNames('button--callOut', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes: classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

CallOutButton.propTypes = Button.propTypes;

export default CallOutButton;
