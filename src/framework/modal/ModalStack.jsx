
import React, {
  Component,
  PropTypes,
} from 'react';

import StackedModal from './StackedModal.jsx';

export default class ModalStack extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const stackedModals = [];
    const children = this.props.children.slice();

    for (let depth = this.props.activeDepth; depth > 0; --depth) {
      const modal = children.shift();
      stackedModals.push(
        <StackedModal
          depth={depth}
          key={depth}
        >
          {modal}
        </StackedModal>
      );
    }

    return (
      <div className="modalStack">
        {stackedModals}
      </div>
    );
  }
}

ModalStack.propTypes = {
  activeDepth: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

ModalStack.defaultProps = {
  activeDepth: 1,
};
