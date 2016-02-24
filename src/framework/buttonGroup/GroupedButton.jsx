
import React from 'react';
import classNames from 'classnames';

import Button from '../button/Button.jsx';

const GroupedButton = props => {
  const classes = classNames('button--grouped', props.classes);

  const extendedProps = Object.assign({}, props, {
    classes: classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

GroupedButton.propTypes = Button.propTypes;

export default GroupedButton;
