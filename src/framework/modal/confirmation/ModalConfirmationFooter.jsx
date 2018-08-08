
import React from 'react';
import PropTypes from 'prop-types';

const ModalConfirmationFooter = props => (
  <div className="modalConfirmationFooter">
    {props.children}
  </div>
);

ModalConfirmationFooter.propTypes = {
  children: PropTypes.any,
};

export default ModalConfirmationFooter;
