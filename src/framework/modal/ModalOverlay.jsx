
import React, {
  PropTypes,
} from 'react';

import classNames from 'classnames';

const ModalOverlay = props => {
  const overlayClasses = classNames('modalOverlay', {
    'is-modal-overlay-open': props.isOpen,
  });

  return (
    <div className={overlayClasses}>
      {props.children}
    </div>
  );
};

ModalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default ModalOverlay;
