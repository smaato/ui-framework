
import React from 'react';
import PropTypes from 'prop-types';

import FilterOption from '../../../services/filter/FilterOption';

const FilterOptionsList = (props) => {
  const filterOptionListItems =
    props.filterOptions.map((filterOption, index) => {
      const onSelectFilterOption = () =>
        props.onSelectFilterOption(filterOption);

      return (
        <div
          className="filterOptionListItem"
          key={index}
          onClick={onSelectFilterOption}
        >
          {filterOption.name}
        </div>
      );
    }
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
