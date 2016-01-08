
import React, {
  PropTypes,
} from 'react';

import classNames from 'classnames';

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

export {
  default as StackedModal,
} from './StackedModal.jsx';

const Modal = props => {
  const modalClasses = classNames('modal');

  return (
    <div className={modalClasses}>
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
