
import React from 'react';
import classNames from 'classnames';
import keyMirror from 'keymirror';
import PropTypes from 'prop-types';

import ModalCloseButton from './ModalCloseButton.jsx';

const ModalHeader = (props) => {
  let title;

  if (props.children || props.type) {
    let icon;

    if (props.type) {
      const typeToIconClassMap = {
        [ModalHeader.TYPE.EDIT]: 'icon-cog',
        [ModalHeader.TYPE.ENDPOINT]: 'icon-link',
        [ModalHeader.TYPE.LINE_ITEM]: 'icon-asterisk',
        [ModalHeader.TYPE.LOG]: 'icon-history',
        [ModalHeader.TYPE.SMX_LINE_ITEM]: 'icon-document',
        [ModalHeader.TYPE.TARGETING]: 'icon-target',
      };

      const iconClasses = classNames(
        'modalHeaderIcon icon',
        typeToIconClassMap[props.type]
      );

      icon = <div className={iconClasses} />;
    }

    title = (
      <div
        data-id={props.dataId}
        className="modalHeader__title"
      >
        {icon}
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
        <div className="modalHeader__closeTopModalIcon icon icon-close" />
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
  ENDPOINT: null,
  LINE_ITEM: null,
  LOG: null,
  SMX_LINE_ITEM: null,
  TARGETING: null,
});

ModalHeader.propTypes = {
  dataId: PropTypes.string,
  children: PropTypes.any,
  onClose: PropTypes.func,
  type: PropTypes.string,
  closeTopModalLabel: PropTypes.string,
};

export default ModalHeader;
