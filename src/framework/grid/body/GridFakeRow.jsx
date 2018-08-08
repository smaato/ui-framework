
import React from 'react';
import PropTypes from 'prop-types';

const GridFakeRow = props => (
  <tr>
    <td colSpan={props.columnsCount}>
      <div style={props.style} />
    </td>
  </tr>
);

GridFakeRow.propTypes = {
  columnsCount: PropTypes.number.isRequired,
  style: PropTypes.object,
};

export default GridFakeRow;
