
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const GridHeaderSortableCell = (props) => {
  const classes = classNames('gridHeaderSortableCell', {
    'is-grid-header-sortable-cell-selected': props.isSelected,
    'is-grid-header-sort-descending': props.isSortDescending,
  });

  function onClick() {
    props.onSort(props.index);
  }

  return (
    <div
      className={classes}
      onClick={onClick}
    >
      <div className="gridHeaderSortableCell__label">
        {props.children}
      </div>

      <div className="gridHeaderSortableCell__arrow">
        <div className="gridHeaderSortableCell__arrowUp arrowUp">
          <div className="arrowUp__centerLine" />
        </div>

        <div className="gridHeaderSortableCell__arrowDown arrowDown">
          <div className="arrowDown__centerLine" />
        </div>
      </div>

    </div>
  );
};

GridHeaderSortableCell.propTypes = {
  children: PropTypes.any,
  onSort: PropTypes.func.isRequired,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  isSortDescending: PropTypes.bool,
};

export default GridHeaderSortableCell;
