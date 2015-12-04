
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const GridHeader = props => {
  const sectionClass = classNames('grid__header', props.classHeader);
  const rowClass = classNames('grid__header__row', props.classHeaderRow);

   // Create cells.
  const headerCells = props.headerCellPropsProviders.map((getPropsForIndex, index) => {
    // Cell classes.
    const classes = classNames('grid__header__cell', props.classHeaderCell);

    // Get properties for the inner cell.
    const innerCellProps = getPropsForIndex(index) || {};

    // We want to add on our own classes to the inner cell, without destroying
    // any classes that have been provided.
    const decoratedInnerCellProps = Object.assign({}, innerCellProps, {
      className: classNames('grid__header__cellLiner', innerCellProps.className),
    });
    return (
      <th
        key={index}
        className={classes}
      >
        <div {...decoratedInnerCellProps} ></div>
      </th>
    );
  });

  return (
    <thead className={sectionClass}>
      <tr className={rowClass}>
        {headerCells}
      </tr>
    </thead>
  );
};

GridHeader.propTypes = {
  headerCellPropsProviders: PropTypes.array.isRequired,
  // Classes
  classHeader: PropTypes.string,
  classHeaderRow: PropTypes.string,
  classHeaderCell: PropTypes.string,
};

export default GridHeader;
