
import React from 'react';
import PropTypes from 'prop-types';

const ModalConfirmationBody = props => (
  <div className="modalConfirmationBody">
    {props.children}
  </div>
);

ModalConfirmationBody.propTypes = {
  children: PropTypes.any,
};

export default ModalConfirmationBody;
