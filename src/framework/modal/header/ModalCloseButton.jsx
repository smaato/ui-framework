
import PropTypes from 'prop-types';
import React from 'react';

const ModalCloseButton = props => (
  <div
    className="modalHeader__closeButton"
    onClick={props.onClick}
  />
);

ModalCloseButton.propTypes = {
  onClick: PropTypes.func,
};

export default ModalCloseButton;
