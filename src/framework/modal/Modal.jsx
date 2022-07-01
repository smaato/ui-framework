
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {
  Component,
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

export default class Modal extends Component {

  constructor(props) {
    super(props);

    // We have to manage mouse hover state via JS instead of CSS because of
    // bugs in Chrome and Safari which don't register a change in :hover state
    // when a new top-most modal is opened.
    this.state = {
      isMouseOver: false,
    };

    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // To address the Chrome/Safari bug, we need to force this modal to act as
    // if the mouse is no longer over it if it's about to be placed behind a
    // new top-most modal.
    if (this.isNextInStack(nextProps)) {
      this.setState({
        isMouseOver: false,
      });
    }
  }

  onClick() {
    if (this.isNextInStack()) {
      this.props.onCloseTopModal();
    }
  }

  onMouseOver() {
    this.setState({
      isMouseOver: true,
    });
  }

  onMouseOut() {
    this.setState({
      isMouseOver: false,
    });
  }

  isModalStacked() {
    return this.props.index < this.props.stackCount - 1;
  }

  isNextInStack() {
    return this.props.index === this.props.stackCount - 2;
  }

  isBuriedInStack() {
    return this.props.index < this.props.stackCount - 2;
  }

  render() {
    const classes = classNames('modal', {
      'is-modal-hovered': this.state.isMouseOver,
      'is-modal-stacked': this.isModalStacked(),
      'is-modal-next-in-stack': this.isNextInStack(),
      'is-modal-buried-in-stack': this.isBuriedInStack(),
    });

    return (
      <div
        data-testid="Modal"
        className={classes}
        data-id={this.props.dataId}
        onClick={this.onClick}
        onMouseOut={this.onMouseOut}
        onMouseOver={this.onMouseOver}
        style={{ width: this.props.width }}
      >
        {this.props.children}
      </div>
    );
  }
}

Modal.propTypes = {
  dataId: PropTypes.string,
  children: PropTypes.any,
  index: PropTypes.number,
  stackCount: PropTypes.number,
  onCloseTopModal: PropTypes.func,
  width: PropTypes.number.isRequired,
};

Modal.defaultProps = {
  width: 450,
};
