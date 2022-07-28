import PropTypes from 'prop-types';
import React, {Component,} from 'react';
import ReactDOM from 'react-dom';

export default class ModalOverlay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.updateBackgroundBlur();
  }

  componentDidUpdate(prevProps) {
    // Only a modalOverlay instance that is being interacted with (i.e. the user
    // is changing its isOpen state) should be able to update the background.
    if (this.props.isOpen !== prevProps.isOpen) {
      this.updateBackgroundBlur();
    }
  }

  componentWillUnmount() {
    // Perform cleanup in case this overlay is removed by unmounting it,
    // instead of using the isOpen prop.
    document.querySelector('body').classList.remove('is-modal-overlay-open');
  }

  updateBackgroundBlur() {
    if (this.props.isOpen) {
      document.querySelector('body').classList.add('is-modal-overlay-open');
    } else {
      document.querySelector('body').classList.remove('is-modal-overlay-open');
    }
  }

  render() {
    return this.props.isOpen ?
      ReactDOM.createPortal(
        (<div data-testid="ModalOverlay" className="modalOverlay">{this.props.children}</div>),
        document.getElementById('portal-div')
      ) : null;
  }
}

ModalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.any,
};
