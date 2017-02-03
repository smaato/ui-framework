
import React, {
  PropTypes,
} from 'react';
import ReactToggle from 'react-toggle';

const Toggle = (props) => {
  const onChange = (event) => {
    props.onChange(event.target.checked);
  };

  return (
    <ReactToggle
      defaultChecked={props.isDefaultChecked}
      icons={false}
      onChange={onChange}
    />
  );
};

Toggle.propTypes = {
  isDefaultChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Toggle;
