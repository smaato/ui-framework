
import React, {
  PropTypes,
} from 'react';

export {
  default as ModalBody,
} from './ModalBody.jsx';

export {
  default as ModalConfirmationBody,
} from './confirmation/ModalConfirmationBody.jsx';

export {
  default as ModalConfirmationFooter,
} from './confirmation/ModalConfirmationFooter.jsx';

export {
  default as ModalFooter,
} from './footer/ModalFooter.jsx';

export {
  default as ModalHeader,
} from './header/ModalHeader.jsx';

export {
  default as ModalOverlay,
} from './overlay/ModalOverlay.jsx';

export {
  default as ModalStack,
} from './stack/ModalStack.jsx';

const Modal = props => {
  return (
    <div
      data-id={props.dataId}
      className="modal"
    >
      {props.header}
      {props.body}
      {props.footer}
    </div>
  );
};

Modal.propTypes = {
  dataId: PropTypes.string,
  header: PropTypes.element,
  body: PropTypes.element.isRequired,
  footer: PropTypes.element,
};

export default Modal;
