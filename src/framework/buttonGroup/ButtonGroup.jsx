
import React, {
  PropTypes,
} from 'react';

const ButtonGroup = props => (
  <div className="buttonGroup">
    {props.children}
  </div>
);

ButtonGroup.propTypes = {
  children: PropTypes.any,
};

export default ButtonGroup;
