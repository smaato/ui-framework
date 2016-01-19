
import React, {
  Component,
  PropTypes,
} from 'react';

import $ from 'jquery';
import Portal from 'react-portal';

export default class ModalOverlay extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.manageBodyClassName(this.props.isOpen);
  }

  componentWillUpdate(nextProps) {
    const isUpdateRequired = this.props.isOpen !== nextProps.isOpen;
    if (isUpdateRequired) {
      this.manageBodyClassName(nextProps.isOpen);
    }
  }

  componentWillUnmount() {
    $('body').removeClass('is-modal-overlay-open');
  }

  manageBodyClassName(isOpen) {
    $('body')[isOpen ? 'addClass' : 'removeClass']('is-modal-overlay-open');
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
  children: PropTypes.element.isRequired,
};
