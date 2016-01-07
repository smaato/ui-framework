
import React from 'react';
import classNames from 'classnames';

import Button from './Button.jsx';

const AppHeaderButton = props => {
  const classes = classNames('button--appHeader', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes: classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

AppHeaderButton.propTypes = Button.propTypes;

export default AppHeaderButton;
