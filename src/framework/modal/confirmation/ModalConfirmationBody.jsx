
import React, {
  PropTypes,
} from 'react';

const ModalConfirmationBody = props => {
  return (
    <div className="modalConfirmationBody">
      {props.children}
    </div>
  );
};

ModalConfirmationBody.propTypes = {
  children: PropTypes.string,
};

export default ModalConfirmationBody;
