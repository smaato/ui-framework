
// Import exports from various modules.
import React, {
  PropTypes,
} from 'react';

export {
  default as ModalBody,
} from './ModalBody.jsx';

export {
  default as ModalCloseButton,
} from './ModalCloseButton.jsx';

export {
  default as ModalFooter,
} from './ModalFooter.jsx';

export {
  default as ModalHeader,
} from './ModalHeader.jsx';

import classNames from 'classnames';

// Define stateless functional component.
const Modal = props => {
  const overlayClasses = classNames('modalOverlay', {
    'is-modal-overlay-open': props.isOpen,
  });

  return (
    <div className={overlayClasses}>
      <div className="modal">
        {props.header}
        {props.body}
        {props.footer}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  header: PropTypes.element,
  body: PropTypes.element.isRequired,
  footer: PropTypes.element,
};

export default Modal;
