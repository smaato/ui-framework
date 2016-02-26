
import React from 'react';
import classNames from 'classnames';

import Button from '../../button/Button.jsx';

const AppHeaderButton = props => {
  const classes = classNames('appHeaderButton', props.className);

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

AppHeaderButton.propTypes = Button.propTypes;

export default AppHeaderButton;
