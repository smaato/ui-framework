
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
    const numberModals = this.props.children.length;
    const stackedModals = this.props.children.map((modal, index) => {
      const depth = numberModals - index;
      const stackedModalClasses = classNames(
        'stackedModal',
        `stackedModal--depth${depth}`
      );

      return (
        <div className={stackedModalClasses} key={index}>
          {modal}
        </div>
      );
    });

    return (
      <div className="modalStack">
        {stackedModals}
      </div>
    );
  }
}

ModalStack.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};
