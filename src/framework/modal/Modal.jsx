
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

export {
  default as ModalOverlay,
} from './ModalOverlay.jsx';

import classNames from 'classnames';

const Modal = props => {
  return (
    <div className="modal">
      {props.header}
      {props.body}
      {props.footer}
    </div>
  );
};

Modal.propTypes = {
  header: PropTypes.element,
  body: PropTypes.element.isRequired,
  footer: PropTypes.element,
};

export default Modal;
