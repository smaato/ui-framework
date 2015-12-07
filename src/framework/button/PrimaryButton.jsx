
import React from 'react';

import Button from './Button.jsx';

const PrimaryButton = props => {
  return (
    <Button
      classes="button--primary"
      iconClasses={props.iconClasses}
      label={props.label}
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
};

PrimaryButton.propTypes = {
  label: Button.propTypes.label,
  iconClasses: Button.propTypes.iconClasses,
  onClick: Button.propTypes.onClick,
  disabled: Button.propTypes.disabled,
};

export default PrimaryButton;
