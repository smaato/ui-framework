
import React, {
  PropTypes,
} from 'react';
import FilterValueEditor from './FilterValueEditor.jsx';

const AvailableFilters = props => {
  const availableFilters = props.availableFilters.map((filterName, filterNameIndex) => {
    const filterLabel = props.availableFilterLabels[filterNameIndex];
    const filterTypes = props.availableFilterTypes[filterNameIndex];
    return filterTypes.map(
      (filterType, filterTypeIndex) => (
        <div
          className="availableFilter"
          key={`${filterNameIndex}:${filterTypeIndex}`}
          onClick={() => props.onClick(filterName, filterLabel, filterType)}
        >
          {filterTypes.length === 1 ? filterLabel : `${filterLabel} (${filterType})`}
        </div>
      )
    );
  });

  return (
    <div className="availableFilters">
      {availableFilters}
    </div>
  );
};

AvailableFilters.propTypes = {
  availableFilters: PropTypes.arrayOf(FilterValueEditor.propTypes.filterName).isRequired,
  availableFilterLabels: PropTypes.arrayOf(FilterValueEditor.propTypes.filterLabel).isRequired,
  availableFilterTypes: PropTypes.arrayOf(PropTypes.array).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AvailableFilters;
