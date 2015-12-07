
import React from 'react';

import Button from './Button.jsx';

const HollowButton = props => {
  return (
    <Button
      classes="button--hollow"
      iconClasses={props.iconClasses}
      label={props.label}
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
};

HollowButton.propTypes = {
  label: Button.propTypes.label,
  iconClasses: Button.propTypes.iconClasses,
  onClick: Button.propTypes.onClick,
  disabled: Button.propTypes.disabled,
};

export default HollowButton;
