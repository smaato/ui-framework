
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

import GridBodyCell from './GridBodyCell.jsx';

const GridRow = props => {
  // Create cells.
  const rowCells = props.rowCellPropsProviders
  .map((cellPropsProvider, index) => (
    <GridBodyCell
      classBodyCell={props.classBodyCell}
      innerCellProps={cellPropsProvider(props.item)}
      key={index}
    />
  ));

  const classes = classNames('gridRow', props.classBodyRow);

  const style = {
    height: props.height,
  };

  function onClick() {
    if (props.onClick) {
      props.onClick(props.item);
    }
  }

  return (
    <tr
      data-id={props.dataId}
      className={classes}
      style= {style}
      onClick={onClick}
    >
      {rowCells}
    </tr>
  );
};

GridRow.propTypes = {
  dataId: PropTypes.string,
  item: PropTypes.object.isRequired,
  rowCellPropsProviders: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  // Classes
  classBodyRow: PropTypes.string,
  classBodyCell: GridBodyCell.propTypes.classBodyCell,
};

export default GridRow;
