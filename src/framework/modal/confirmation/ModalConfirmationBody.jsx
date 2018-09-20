
import PropTypes from 'prop-types';
import React from 'react';

const ModalConfirmationBody = props => (
  <div className="modalConfirmationBody">
    {props.children}
  </div>
);

ModalConfirmationBody.propTypes = {
  children: PropTypes.any,
};

export default ModalConfirmationBody;
