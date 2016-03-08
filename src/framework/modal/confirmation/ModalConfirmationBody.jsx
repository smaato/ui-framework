
import React, {
  PropTypes,
} from 'react';

const ModalConfirmationBody = props => (
  <div className="modalConfirmationBody">
    {props.children}
  </div>
);

ModalConfirmationBody.propTypes = {
  children: PropTypes.string,
};

export default ModalConfirmationBody;
