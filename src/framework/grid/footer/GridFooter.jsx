
import classNames from 'classnames';
import React, {
  PropTypes,
} from 'react';

import GridFooterCell from './GridFooterCell.jsx';

const GridFooter = (props) => {
  const sectionClass = classNames('grid__footer', props.classFooter);
  const rowClass = classNames('grid__footer__row', props.classFooterRow);

  let cellsWithChildren = 0;
  const footerCells = props.footerCellPropsProviders
    .map((getPropsForIndex, index) => {
      const innerCellProps = getPropsForIndex(index) || {};
      if (innerCellProps.children) {
        cellsWithChildren += 1;
      }

      return (
        <GridFooterCell
          classFooterCell={props.classFooterCell}
          innerCellProps={innerCellProps}
          isFirstCellWithChildren={
            innerCellProps.children && cellsWithChildren === 1
          }
          key={index}
        />
      );
    }
  );

  let children;
  if (props.children) {
    children = (
      <tr>
        <td colSpan={props.footerCellPropsProviders.length}>
          {props.children}
        </td>
      </tr>
    );
  }

  return (
    <tfoot className={sectionClass}>
      <tr className={rowClass}>
        {footerCells}
      </tr>
      {children}
    </tfoot>
  );
};

GridFooter.propTypes = {
  children: PropTypes.any,
  classFooter: PropTypes.string,
  classFooterCell: GridFooterCell.propTypes.classFooterCell,
  classFooterRow: PropTypes.string,
  footerCellPropsProviders: PropTypes.array.isRequired,
};

export default GridFooter;
