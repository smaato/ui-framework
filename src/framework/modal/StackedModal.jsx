
import React, {
  Component,
  PropTypes,
} from 'react';

import classNames from 'classnames';

export default class StackedModal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const stackedModalClasses = classNames(
      'stackedModal',
      `stackedModal--depth${this.props.depth}`
    );

    return (
      <div className={stackedModalClasses}>
        {this.props.children}
      </div>
    );
  }
}

StackedModal.propTypes = {
  depth: PropTypes.number,
  children: PropTypes.element.isRequired,
};
