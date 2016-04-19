
import React, {
  PropTypes,
} from 'react';

const ModalConfirmationFooter = props => (
  <div className="modalConfirmationFooter">
    {props.children}
  </div>
);

ModalConfirmationFooter.propTypes = {
  children: PropTypes.any,
};

export default ModalConfirmationFooter;
