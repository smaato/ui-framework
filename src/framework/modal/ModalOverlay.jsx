
import React, {
  Component,
  PropTypes,
} from 'react';

import classNames from 'classnames';

export default class ModalOverlay extends Component {

  constructor(props) {
    super(props);
    this.resizeListenerBound = this.resizeListener.bind(this);
    this.state = {
      isWindowSmallerThanModal: false,
    };
  }

  componentDidMount() {
    this.resizeListenerBound();
    window.addEventListener('resize', this.resizeListenerBound);
  }

  componentDidUpdate() {
    this.resizeListenerBound();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListenerBound);
  }

  isWindowSmallerThanModal() {
    const windowHeight = window.innerHeight;
    const modalEl = this.refs.overlayEl.children[0];
    const modalHeight = modalEl.offsetHeight;
    return windowHeight <= modalHeight;
  }

  resizeListener() {
    const isWindowSmaller = this.isWindowSmallerThanModal();
    if (this.state.isWindowSmallerThanModal !== isWindowSmaller) {
      this.setState({
        isWindowSmallerThanModal: isWindowSmaller,
      });
    }
  }

  render() {
    const overlayClasses = classNames('modalOverlay', {
      'is-modal-overlay-open': this.props.isOpen,
      'is-window-smaller-than-modal': this.state.isWindowSmallerThanModal,
    });

    return (
      <div className={overlayClasses} ref="overlayEl">
        {this.props.children}
      </div>
    );
  }
}

ModalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
