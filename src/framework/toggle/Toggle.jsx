
import React from 'react';
import ReactToggle from 'react-toggle';
import PropTypes from 'prop-types';

const Toggle = (props) => {
  let icons = false;

  if (props.isLabel) {
    icons = {
      checked: 'ON',
      unchecked: 'OFF',
    };
  }

  const onChange = (event) => {
    props.onChange(event.target.checked);
  };

  return (
    <ReactToggle
      data-testid="Toggle"
      checked={props.checked}
      icons={icons}
      onChange={onChange}
    />
  );
};

Toggle.propTypes = {
  checked: PropTypes.bool,
  isLabel: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Toggle;
