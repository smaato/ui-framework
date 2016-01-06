
import React, {
  PropTypes,
} from 'react';

import ModalCloseButton from './ModalCloseButton.jsx';

const ModalHeader = (props) => {
  let closeButton;
  let title;
  if (props.title) {
    let icon;
    if (props.icon) {
      icon = (
        <div className="modalHeader__icon">
          {props.icon}
        </div>
      );
    }

    title = (
      <div className="modalHeader__title">
        {icon}
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
  icon: PropTypes.element,
};

export default ModalHeader;
