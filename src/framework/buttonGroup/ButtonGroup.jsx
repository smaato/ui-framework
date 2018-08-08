
import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = props => (
  <div className="buttonGroup">
    {props.children}
  </div>
);

ButtonGroup.propTypes = {
  children: PropTypes.any,
};

export default ButtonGroup;
