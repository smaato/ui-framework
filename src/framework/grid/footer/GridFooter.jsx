
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const GridFooter = props => {
  const sectionClass = classNames('grid__footer', props.classFooter);
  const rowClass = classNames('grid__footer__row', props.classFooterRow);

   // Create cells.
  const footerCells = props.footerCellPropsProviders
  .map((getPropsForIndex, index) => {
    // Cell classes.
    const classes = classNames('grid__footer__cell', props.classFooterCell);

    // Get properties for the inner cell.
    const innerCellProps = getPropsForIndex(index) || {};

    // We want to add on our own classes to the inner cell, without destroying
    // any classes that have been provided.
    const decoratedInnerCellProps = Object.assign({}, innerCellProps, {
      className: classNames(
        'grid__footer__cellLiner',
        innerCellProps.className
      ),
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
    <tfoot className={sectionClass}>
      <tr className={rowClass}>
        {footerCells}
      </tr>
    </tfoot>
  );
};

GridFooter.propTypes = {
  footerCellPropsProviders: PropTypes.array.isRequired,
  classFooter: PropTypes.string,
  classFooterRow: PropTypes.string,
  classFooterCell: PropTypes.string,
};

export default GridFooter;
