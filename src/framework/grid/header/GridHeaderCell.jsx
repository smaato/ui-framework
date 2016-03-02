
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const GridHeaderCell = props => {
  // Cell classes.
  const classes = classNames('grid__header__cell', props.classHeaderCell);

  // We want to add on our own classes to the inner cell, without destroying
  // any classes that have been provided.
  const decoratedInnerCellProps = Object.assign({}, props.innerCellProps, {
    className: classNames(
      'grid__header__cellLiner',
      props.innerCellProps.className
    ),
  });

  return (
    <th className={classes}>
      <div {...decoratedInnerCellProps} ></div>
    </th>
  );
};

GridHeaderCell.propTypes = {
  innerCellProps: PropTypes.object,
  // Classes
  classHeaderCell: PropTypes.string,
};

GridHeaderCell.defaultProps = {
  innerCellProps: {},
};

export default GridHeaderCell;
