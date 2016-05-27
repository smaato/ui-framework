
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const GridBody = props => {
  const {
    initialLoadingRow,
    loadingRow,
    emptyRow,
  } = props;

  const sectionClass = classNames(
    'grid__body',
    props.classBody
  );

  return (
    <tbody className={sectionClass}>
      {/* A row to indicate initial loading progress */}
      {initialLoadingRow}

      {/* A row to indicate empty state */}
      {emptyRow}

      {/* Recycled rows */}
      {props.children}

      {/* A row to indicate loading progress */}
      {loadingRow}
    </tbody>
  );
};

GridBody.propTypes = {
  children: React.PropTypes.any,
  // Initial loading state
  initialLoadingRow: PropTypes.element,
  // Empty state
  emptyRow: PropTypes.element,
  // Loading state
  loadingRow: PropTypes.element,
  // Classes
  classBody: PropTypes.string,
};

export default GridBody;
