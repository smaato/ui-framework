
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

import { Portal } from 'react-portal';

export default class ModalOverlay extends Component {

  componentWillMount() {
    this.updateBackgroundBlur();
  }

  componentWillUpdate(nextProps) {
    // Only a modalOverlay instance that is being interacted with (i.e. the user
    // is changing its isOpen state) should be able to update the background.
    if (nextProps.isOpen !== this.props.isOpen) {
      this.updateBackgroundBlur(nextProps);
    }
  }

  componentWillUnmount() {
    // Perform cleanup in case this overlay is removed by unmounting it,
    // instead of using the isOpen prop.
    document.querySelector('body').classList.remove('is-modal-overlay-open');
  }

  updateBackgroundBlur(props = this.props) {
    if (props.isOpen) {
      document.querySelector('body').classList.add('is-modal-overlay-open');
    } else {
      document.querySelector('body').classList.remove('is-modal-overlay-open');
    }
  }

  render() {
    return (
      <Portal isOpened={this.props.isOpen}>
        <div className="modalOverlay">
          {this.props.children}
        </div>
      </Portal>
    );
  }
}

ModalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.any,
};
