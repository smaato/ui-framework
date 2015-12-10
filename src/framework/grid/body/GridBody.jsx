
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

      {/* Fake the preceding rows */}
      <tr>
        <td colSpan={props.columnsCount}>
          <div style={{minHeight: props.firstRecycledRowOffset}}></div>
        </td>
      </tr>

      {/* Recycled rows */}
      {props.children}

      {/* Fake the following rows */}
      <tr>
        <td colSpan={props.columnsCount}>
          <div style={{minHeight: props.lastRecycledRowOffset}}></div>
        </td>
      </tr>

      {/* A row to indicate loading progress */}
      {loadingRow}
    </tbody>
  );
};

GridBody.propTypes = {
  columnsCount: PropTypes.number.isRequired,
  firstRecycledRowOffset: PropTypes.number.isRequired,
  lastRecycledRowOffset: PropTypes.number.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
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
