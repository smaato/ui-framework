
import React, {
  PropTypes,
} from 'react';
import FilterOption from '../../services/filter/FilterOption';

const FilterOptionsList = (props) => {
  const filterOptionListItems =
    props.filterOptions.map((filterOption, index) => (
      filterOption.comparisonTypes
        .map((comparisonType, comparisonTypeIndex) => {
          const onSelectFilterOption =
            () => props.onSelectFilterOption(filterOption, comparisonType);

          return (
            <div
              className="filterOptionListItem"
              key={`${index}:${comparisonTypeIndex}`}
              onClick={onSelectFilterOption}
            >
              {filterOption.comparisonTypes.length === 1
                ? filterOption.name
                : `${filterOption.name} (${comparisonType})`}
            </div>
          );
        }
      )
    )
  );

  return (
    <div className="filterList">
      {filterOptionListItems}
    </div>
  );
};

FilterOptionsList.propTypes = {
  filterOptions: PropTypes.arrayOf(
    PropTypes.instanceOf(FilterOption)
  ).isRequired,
  onSelectFilterOption: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
};

export default FilterOptionsList;
