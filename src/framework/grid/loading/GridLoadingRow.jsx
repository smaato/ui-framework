
// Import exports from various modules.
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';
import Entity from '../../services/Entity';
import Spinner from '../../spinner/Spinner.jsx';

// Define stateless functional component.
export default class GridLoadingRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const className = classNames(
      'gridLoadingRow',
      this.props.isInitial ? 'gridLoadingRow--initial' : null
    );

    return (
      <div className={className}>
        <Spinner />
        {Entity.nbsp}
        <span>Loading...</span>
      </div>
    );
  }
}

GridLoadingRow.propTypes = {
  isInitial: PropTypes.bool,
};
