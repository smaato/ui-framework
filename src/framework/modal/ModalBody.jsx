
import PropTypes from 'prop-types';
import React from 'react';

const ModalBody = props => (
  <div className="modalBody">
    {props.children}
  </div>
);

ModalBody.propTypes = {
  children: PropTypes.any,
};

export default ModalBody;
