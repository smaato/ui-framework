
import React, {
  Component,
  PropTypes,
} from 'react';

import classNames from 'classnames';

export default class ModalStack extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const stackedModals = [];
    const stackDepth = this.props.depth;

    for (let modalDepth = stackDepth; modalDepth > 0; --modalDepth) {
      const modal = this.props.children.shift();

      const stackedModalClasses = classNames(
        'stackedModal',
        `stackedModal--depth${modalDepth}`
      );

      stackedModals.push(
        <div className={stackedModalClasses} key={modalDepth}>
          {modal}
        </div>
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
  depth: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

ModalStack.defaultProps = {
  depth: 1,
};
