
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import keyMirror from 'keymirror';

import ModalCloseButton from './ModalCloseButton.jsx';

const ModalHeader = props => {
  let title;

  if (props.children || props.type) {
    const typeToIconClassMap = {
      [ModalHeader.TYPE.EDIT]: 'icon-cog',
      [ModalHeader.TYPE.DOCUMENT]: 'icon-document',
      [ModalHeader.TYPE.LINE_ITEM]: 'icon-asterisk',
      [ModalHeader.TYPE.ENDPOINT]: 'icon-link',
    };

    const iconClasses = classNames(
      'modalHeaderIcon icon',
      typeToIconClassMap[props.type]
    );

    title = (
      <div
        data-id={props.dataId}
        className="modalHeader__title"
      >
        <div className={iconClasses} />
        {props.children}
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

ModalHeader.TYPE = keyMirror({
  EDIT: null,
  DOCUMENT: null,
  LINE_ITEM: null,
  ENDPOINT: null,
});

ModalHeader.propTypes = {
  dataId: PropTypes.string,
  children: PropTypes.string,
  onClose: PropTypes.func,
  type: PropTypes.string,
  closeTopModalLabel: PropTypes.string,
};

export default ModalHeader;
