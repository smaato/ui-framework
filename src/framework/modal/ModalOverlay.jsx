
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
    this.manageBodyClassName();
  }

  componentWillUpdate(nextProps) {
    this.manageBodyClassName(nextProps);
  }

  componentWillUnmount() {
    $('body').removeClass('is-modal-overlay-open');
  }

  manageBodyClassName(props) {
    const _props = props || this.props;
    $('body')[_props.isOpen ? 'addClass' : 'removeClass']('is-modal-overlay-open');
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
