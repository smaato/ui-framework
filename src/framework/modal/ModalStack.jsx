
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

    for (let depth = this.props.activeDepth; depth > 0; --depth) {
      const modal = this.props.children.shift();

      const stackedModalClasses = classNames(
        'stackedModal',
        `stackedModal--depth${depth}`
      );

      stackedModals.push(
        <div className={stackedModalClasses} key={depth}>
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
  activeDepth: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

ModalStack.defaultProps = {
  activeDepth: 1,
};
