
import React, {
  PropTypes,
} from 'react';

import Entity from '../../services/string/Entity';
import Filter from '../../services/filter/Filter';

const SelectedFilterList = (props) => {
  const filterItems = props.filters.map((filter, index) => {
    const filterName = filter.filterOption.name;
    const title =
      `${filterName} (${filter.comparisonType}): ` +
      `${filter.comparisonValue}`;
    const onRemoveSelectedFilter =
      props.onRemoveSelectedFilter.bind(null, filter);

    return (
      <div className="selectedFilterListItem" key={index}>
        <span
          className="selectedFilterListItem__label"
          title={title}
        >
          <strong className="selectedFilterListItem__name">
            {filterName}:
          </strong>
          {Entity.nbsp}
          {filter.humanizeComparisonValue()}
        </span>

        <div className="selectedFilterListItem__removeButtonContainer">
          <span
            className="css-icon cross"
            onClick={onRemoveSelectedFilter}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="selectedFilterList">
      {filterItems}
    </div>
  );
};

SelectedFilterList.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.instanceOf(Filter)
  ).isRequired,
  onRemoveSelectedFilter: PropTypes.func.isRequired,
};

export default SelectedFilterList;
