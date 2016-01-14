
import React, {
  Component,
  PropTypes,
} from 'react';

import $ from 'jquery';

export default class ModalOverlay extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    $('body').addClass('is-modal-overlay-open');
  }

  componentWillUnmount() {
    $('body').removeClass('is-modal-overlay-open');
  }

  render() {
    return (
      <div className="modalOverlay">
        {this.props.children}
      </div>
    );
  }
}

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
};
