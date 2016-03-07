
import React, {
  PropTypes,
} from 'react';

const ButtonGroup = props => {
  return (
    <div className="buttonGroup">
      {props.children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.any,
};

export default ButtonGroup;
