
import React, {
  PropTypes,
} from 'react';

const GridEmptyRow = props => {
  return (
    <tr>
      <td colSpan={props.columnsCount}>
        <div className="gridEmptyRow">
           No data.
        </div>
      </td>
    </tr>
  );
};

GridEmptyRow.propTypes = {
  columnsCount: PropTypes.number.isRequired,
};

export default GridEmptyRow;
