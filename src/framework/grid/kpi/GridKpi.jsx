
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

export default class GridKpi extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const className = classNames(
      'grid__body__cellChange',
      this.props.className
    );

    return (
      <span
        className={className}
        title={this.props.title}
      >
        {this.props.content}
      </span>
    );
  }
}

GridKpi.propTypes = {
  className: PropTypes.string,
  content: PropTypes.any.isRequired,
  title: PropTypes.string,
};
