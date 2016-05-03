
// Import exports from various modules.
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

// Define stateless functional component.
const StickyGrid = props => {
  // Create cells.
  const headerCells = props.headerCellPropsProviders
  .map((cellPropsProvider, index) => {
    // Get properties for the inner cell.
    const innerCellProps = cellPropsProvider(index) || {};

    const decoratedInnerCellProps = Object.assign({}, innerCellProps, {
      className: classNames('stickyGridHeaderCell', innerCellProps.className),
    });

    return (
      <div
        key={index}
        {...decoratedInnerCellProps}
      >
      </div>
    );
  });

  return (
    <div
      id={props.id}
      className="stickyGrid"
    >
      <div className="stickyGridHeader">
        {headerCells}
      </div>
      {props.children}
    </div>
  );
};

StickyGrid.propTypes = {
  id: PropTypes.string,
  headerCellPropsProviders: PropTypes.array.isRequired,
  children: PropTypes.any,
};

export default StickyGrid;
