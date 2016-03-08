
import React, {
  PropTypes,
} from 'react';

const ModalCloseButton = props => (
  <div
    className="icon modalHeader__closeButton"
    onClick={ props.onClick }
  >
  </div>
);

ModalCloseButton.propTypes = {
  onClick: PropTypes.func,
};

export default ModalCloseButton;
