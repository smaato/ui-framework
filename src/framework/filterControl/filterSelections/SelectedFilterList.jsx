
import React, {
  PropTypes,
} from 'react';

import Entity from '../../services/string/Entity';
import Filter from '../../services/filter/Filter';

const SelectedFilterList = (props) => {
  const filterItems = props.selectedFilters.map((filter, index) => {
    const onRemoveSelectedFilter =
      props.onRemoveSelectedFilter.bind(null, filter);

    return (
      <div className="selectedFilterListItem" key={index}>
        <span
          className="selectedFilterListItem__label"
          title={filter.filterOption.name}
        >
          <strong className="selectedFilterListItem__name">
            {filter.filterOption.name}:
          </strong>
          {Entity.nbsp}
          {filter.humanizeComparisonValue()}
        </span>

        <div className="selectedFilterListItem__removeButtonContainer">
          <span
            className="selectedFilterListItem__removeButton"
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
  onRemoveSelectedFilter: PropTypes.func.isRequired,
  selectedFilters: PropTypes.arrayOf(
    PropTypes.instanceOf(Filter)
  ).isRequired,
};

export default SelectedFilterList;
