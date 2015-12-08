
import React from 'react';

import Button from './Button.jsx';

const CallOutButton = props => {
  return (
    <Button
      classes="button--callOut"
      iconClasses={props.iconClasses}
      label={props.label}
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
};

CallOutButton.propTypes = {
  label: Button.propTypes.label,
  iconClasses: Button.propTypes.iconClasses,
  onClick: Button.propTypes.onClick,
  disabled: Button.propTypes.disabled,
};

export default CallOutButton;
