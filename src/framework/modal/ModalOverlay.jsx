
import React, {
  Component,
  PropTypes,
} from 'react';

import classNames from 'classnames';

export default class ModalOverlay extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const overlayClasses = classNames('modalOverlay', {
      'is-modal-overlay-open': this.props.isOpen,
    });

    return (
      <div className={overlayClasses}>
        {this.props.children}
      </div>
    );
  }
}

ModalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};
