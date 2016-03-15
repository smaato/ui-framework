
import React, {
  PropTypes,
} from 'react';

import ModalCloseButton from './ModalCloseButton.jsx';

const ModalHeader = props => {
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
      <div
        data-id={props.dataId}
        className="modalHeader__title"
      >
        {icon}
        {props.title}
      </div>
    );
  }

  let closeButton;

  if (props.onClose) {
    closeButton = (
      <ModalCloseButton onClick={props.onClose} />
    );
  }

  let closeTopModalLabel;

  if (props.closeTopModalLabel) {
    closeTopModalLabel = (
      <div className="modalHeader__closeTopModalLabel">
        {props.closeTopModalLabel}
      </div>
    );
  }

  return (
    <div className="modalHeader">
      {title}
      {closeTopModalLabel}
      {closeButton}
    </div>
  );
};

ModalHeader.propTypes = {
  dataId: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func,
  icon: PropTypes.element,
  closeTopModalLabel: PropTypes.string,
};

export default ModalHeader;
