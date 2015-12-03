
import React, {
  PropTypes,
} from 'react';
import FilterMatcherForm from '../filterMatchers/FilterMatcherForm.jsx';

const FiltersList = props => {
  const filtersListItems = props.filters.map((filter, index) => {
    return filter.methods.map((method, methodIndex) => {
      return (
        <div
          className="filtersListItem"
          key={`${index}:${methodIndex}`}
          onClick={() => props.onSelectFilter(filter, method)}
        >
          {filter.methods.length === 1 ? filter.name : `${filter.name} (${method})`}
        </div>
      );
    });
  });

  return (
    <div className="filtersList">
      {filtersListItems}
    </div>
  );
};

FiltersList.propTypes = {
  filters: PropTypes.arrayOf(FilterMatcherForm.propTypes.filter).isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default FiltersList;
