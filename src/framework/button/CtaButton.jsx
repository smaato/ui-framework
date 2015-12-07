
import React from 'react';

import Button from './Button.jsx';

const CtaButton = props => {
  return (
    <Button
      classes="button--cta"
      iconClasses={props.iconClasses}
      label={props.label}
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
};

CtaButton.propTypes = {
  label: Button.propTypes.label,
  iconClasses: Button.propTypes.iconClasses,
  onClick: Button.propTypes.onClick,
  disabled: Button.propTypes.disabled,
};

export default CtaButton;
