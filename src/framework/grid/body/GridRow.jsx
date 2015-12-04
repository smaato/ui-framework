
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const GridRow = props => {
  // Create cells.
  const rowCells = props.rowCellPropsProviders.map((getPropsForItem, index) => {
    // Cell classes.
    const classes = classNames('grid__body__cell', props.classBodyCell);

    // Get properties for the inner cell.
    const innerCellProps = getPropsForItem(props.item);

    // We want to add on our own classes to the inner cell, without destroying
    // any classes that have been provided.
    const decoratedInnerCellProps = Object.assign({}, innerCellProps, {
      className: classNames('grid__body__cellLiner', innerCellProps.className),
    });

    return (
      <td
        key={index}
        className={classes}
      >
        <div {...decoratedInnerCellProps}></div>
      </td>
    );
  });

  const classes = classNames(props.classBodyRow);

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
      className={classes}
      style= {style}
      onClick={onClick}
    >
      {rowCells}
    </tr>
  );
};

GridRow.propTypes = {
  item: PropTypes.object.isRequired,
  rowCellPropsProviders: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  // Classes
  classBodyRow: PropTypes.string,
  classBodyCell: PropTypes.string,
};

export default GridRow;
