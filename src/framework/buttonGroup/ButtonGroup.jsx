
import PropTypes from 'prop-types';
import React from 'react';

const ButtonGroup = props => (
  <div data-testid="ButtonGroup" className="buttonGroup">
    {props.children}
  </div>
);

ButtonGroup.propTypes = {
  children: PropTypes.any,
};

export default ButtonGroup;
