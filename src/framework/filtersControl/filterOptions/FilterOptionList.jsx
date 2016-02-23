
import React, {
  PropTypes,
} from 'react';
import FilterOption from '../../services/filter/FilterOption';

const FilterOptionsList = props => {
  const filterOptionListItems = props.filterOptions
  .map((filterOption, index) => {
    return filterOption.comparisonTypes
    .map((comparisonType, comparisonTypeIndex) => {
      return (
        <div
          className="filterOptionListItem"
          key={`${index}:${comparisonTypeIndex}`}
          onClick={() => (
            props.onSelectFilterOption(filterOption, comparisonType)
          )}
        >
          {filterOption.comparisonTypes.length === 1
            ? filterOption.name
            : `${filterOption.name} (${comparisonType})`}
        </div>
      );
    });
  });

  return (
    <div className="filtersList">
      {filterOptionListItems}
    </div>
  );
};

FilterOptionsList.propTypes = {
  filterOptions: PropTypes.arrayOf(
    PropTypes.instanceOf(FilterOption)
  ).isRequired,
  onSelectFilterOption: PropTypes.func.isRequired,
};

export default FilterOptionsList;
