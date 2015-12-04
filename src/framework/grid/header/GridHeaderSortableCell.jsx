
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const GridHeaderSortableCell = props => {
  const classes = classNames('gridHeaderSortableCell', {
    'is-grid-header-sortable-cell-selected': props.isSelected,
    'is-grid-header-sort-descending': props.isSortDescending,
  });

  return (
    <div
      className={classes}
      onClick={props.onClick}
    >
      <div className="gridHeaderSortableCell__label">
        {props.children}
      </div>

      <div className="gridHeaderSortableCell__arrow">
        <div className="gridHeaderSortableCell__arrowUp arrowUp">
          <div className="arrowUp__centerLine"></div>
        </div>

        <div className="gridHeaderSortableCell__arrowDown arrowDown">
          <div className="arrowDown__centerLine"></div>
        </div>
      </div>

    </div>
  );
};

GridHeaderSortableCell.propTypes = {
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  isSortDescending: PropTypes.bool,
};

export default GridHeaderSortableCell;
