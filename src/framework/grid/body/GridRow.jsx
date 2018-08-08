
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import GridBodyCell from './GridBodyCell.jsx';

const GridRow = (props) => {
  // Create cells.
  const rowCells =
    props.rowCellPropsProviders.map((cellPropsProvider, index) => (
      <GridBodyCell
        classBodyCell={props.classBodyCell}
        innerCellProps={cellPropsProvider(props.data)}
        key={index}
      />
    )
  );

  const classes = classNames('gridRow', props.classBodyRow);

  const style = {
    height: props.height,
  };

  function onClick() {
    if (props.onClick) {
      props.onClick(props.data);
    }
  }

  return (
    <tr
      className={classes}
      data-id={props.dataId}
      onClick={onClick}
      style={style}
    >
      {rowCells}
    </tr>
  );
};

GridRow.propTypes = {
  classBodyCell: GridBodyCell.propTypes.classBodyCell, // eslint-disable-line react/no-unused-prop-types
  classBodyRow: PropTypes.string,
  data: PropTypes.object.isRequired,
  dataId: PropTypes.string,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  rowCellPropsProviders: PropTypes.array.isRequired,
};

export default GridRow;
