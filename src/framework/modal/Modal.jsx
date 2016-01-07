
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

const Modal = props => {
  const modalClasses = classNames('modal', {
    'is-modal-stacked': props.isStacked,
  });

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
  isStacked: PropTypes.bool,
};

export default Modal;
