
import React from 'react';
import classNames from 'classnames';

import Button from './Button.jsx';

const CallOutButton = props => {
  const classes = classNames('button--callOut', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

CallOutButton.TYPE = Object.assign({}, Button.TYPE);

CallOutButton.propTypes = Object.assign({}, Button.propTypes);

export default CallOutButton;
