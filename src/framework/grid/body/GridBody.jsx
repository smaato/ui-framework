
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const GridBody = (props) => {
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
  children: PropTypes.any,
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
