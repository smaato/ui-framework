
// Import exports from various modules.
import React, {
  Component,
  PropTypes,
} from 'react';
import Spinner from '../../spinner/Spinner.jsx';
import classNames from 'classnames';

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
        {
          /* React way '&nbsp;'
             https://facebook.github.io/react/docs/jsx-gotchas.html */
          String.fromCharCode(160)
        }
        <span>Loading...</span>
      </div>
    );
  }
}

GridLoadingRow.propTypes = {
  isInitial: PropTypes.bool,
};
