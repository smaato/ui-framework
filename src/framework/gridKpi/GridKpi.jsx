
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

export {
  default as GridKpiPositive,
} from './GridKpiPositive.jsx';

export {
  default as GridKpiNegative,
} from './GridKpiNegative.jsx';

export default class GridKpi extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const className = classNames(
      'gridKpi',
      this.props.className
    );

    return (
      <span
        className={className}
        title={this.props.title}
      >
        {this.props.children}
      </span>
    );
  }
}

GridKpi.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};
