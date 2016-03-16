
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const GridBodyCell = props => {
  // Cell classes.
  const classes = classNames('grid__body__cell', props.classBodyCell);

  // We want to add on our own classes to the inner cell, without destroying
  // any classes that have been provided.
  const decoratedInnerCellProps = Object.assign({}, props.innerCellProps, {
    className: classNames(
      'grid__body__cellLiner',
      props.innerCellProps.className,
      {
        'grid__body__cellLiner--overflow': props.innerCellProps.canOverflow,
      }
    ),
  });

  return (
    <td className={classes}>
      <div {...decoratedInnerCellProps}></div>
    </td>
  );
};

GridBodyCell.propTypes = {
  innerCellProps: PropTypes.object,
  // Classes
  classBodyCell: PropTypes.string,
};

GridBodyCell.defaultProps = {
  innerCellProps: {},
};

export default GridBodyCell;
