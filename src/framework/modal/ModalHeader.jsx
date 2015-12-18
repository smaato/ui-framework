
import React, {
  PropTypes,
} from 'react';

import ModalCloseButton from './ModalCloseButton.jsx';

const ModalHeader = (props) => {
  let closeButton;
  let title;
  if (props.title) {
    title = (
      <div className="modalHeader__title">
        {props.title}
      </div>
    );
  }
  if (props.onClose) {
    closeButton = (
      <ModalCloseButton onClick={props.onClose} />
    );
  }
  return (
    <div className="modalHeader">
      {title}
      {closeButton}
    </div>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default ModalHeader;
