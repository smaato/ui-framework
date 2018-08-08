
import React from 'react';
import PropTypes from 'prop-types';

const ModalBody = props => (
  <div className="modalBody">
    {props.children}
  </div>
);

ModalBody.propTypes = {
  children: PropTypes.any,
};

export default ModalBody;
