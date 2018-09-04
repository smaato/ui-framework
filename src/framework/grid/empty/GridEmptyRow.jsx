
import PropTypes from 'prop-types';
import React from 'react';

const GridEmptyRow = (props) => {
  const style = {
    height: props.height,
  };
  const message = props.message || 'No data.';

  return (
    <tr>
      <td colSpan={props.columnsCount}>
        <div
          className="gridEmptyRow"
          style={style}
        >
          {message}
        </div>
      </td>
    </tr>
  );
};

GridEmptyRow.propTypes = {
  columnsCount: PropTypes.number.isRequired,
  height: PropTypes.number,
  message: PropTypes.any,
};

export default GridEmptyRow;
