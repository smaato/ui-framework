
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import GridHeaderCell from './GridHeaderCell.jsx';

const GridHeader = (props) => {
  const sectionClass = classNames('grid__header', props.classHeader);
  const rowClass = classNames('grid__header__row', props.classHeaderRow);

   // Create cells.
  const headerCells =
    props.headerCellPropsProviders.map((cellPropsProvider, index) => (
      <GridHeaderCell
        classHeaderCell={props.classHeaderCell}
        innerCellProps={cellPropsProvider(index)}
        key={index}
      />
    )
  );

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
  classHeaderCell: GridHeaderCell.propTypes.classHeaderCell,
};

export default GridHeader;
