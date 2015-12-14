
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import Spinner from '../../spinner/Spinner.jsx';

const GridLoadingRow = props => {
  const className = classNames(
    'gridLoadingRow',
    props.isInitial ? 'gridLoadingRow--initial' : null
  );

  return (
    <tr>
      <td colSpan={props.columnsCount}>
        <div className={className}>
          <Spinner />
          <span>Loading...</span>
        </div>
      </td>
    </tr>
  );
};

GridLoadingRow.propTypes = {
  columnsCount: PropTypes.number.isRequired,
  isInitial: PropTypes.bool,
};

export default GridLoadingRow;
