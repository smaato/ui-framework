
import React from 'react';
import classNames from 'classnames';

import Button from '../../button/Button.jsx';

const AppHeaderButton = props => {
  const classes = classNames('appHeaderButton', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes: classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

AppHeaderButton.propTypes = Button.propTypes;

export default AppHeaderButton;
