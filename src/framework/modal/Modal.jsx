
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
      {props.children}
    </div>
  );
};

Modal.propTypes = {
  dataId: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Modal;
