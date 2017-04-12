
import React, {
  PropTypes,
} from 'react';
import ReactToggle from 'react-toggle';

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
      defaultChecked={props.isDefaultChecked}
      icons={icons}
      onChange={onChange}
    />
  );
};

Toggle.propTypes = {
  isDefaultChecked: PropTypes.bool,
  isLabel: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Toggle;
