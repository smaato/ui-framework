
import React, {
  PropTypes,
} from 'react';

export {
  default as ModalBody,
} from './ModalBody.jsx';

export {
  default as ModalFooter,
} from './ModalFooter.jsx';

export {
  default as ModalHeader,
} from './ModalHeader.jsx';

export {
  default as ModalOverlay,
} from './ModalOverlay.jsx';

export {
  default as ModalStack,
} from './ModalStack.jsx';

const Modal = props => {
  return (
    <div className="modal" onClick={props.onClick}>
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
  onClick: PropTypes.func,
};

export default Modal;
