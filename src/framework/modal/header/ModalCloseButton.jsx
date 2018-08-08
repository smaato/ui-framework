
import React from 'react';
import PropTypes from 'prop-types';

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
