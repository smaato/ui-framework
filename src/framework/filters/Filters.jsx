
import React, {
  PropTypes,
} from 'react';

import ToggleFilterDropdownButton from './dropdown/ToggleFilterDropdownButton.jsx';
import AddedFilter from './AddedFilter.jsx';

const Filters = props => {
  const addedFilters = props.addedFilters.map(
    (filter, index) =>
      <AddedFilter
        id={filter.id}
        name={filter.name}
        label={filter.label}
        type={filter.type}
        value={filter.value}
        key={index}
        onRemove={props.onRemove}
      />
  );

  return (
    <div className="filters">
      {addedFilters}
      <ToggleFilterDropdownButton
        onAdd={props.onAdd}
        availableFilters={props.availableFilters}
        availableFilterLabels={props.availableFilterLabels}
        availableFilterTypes={props.availableFilterTypes}
      />
    </div>
  );
};

Filters.propTypes = {
  addedFilters: PropTypes.arrayOf(PropTypes.object),
  availableFilters: ToggleFilterDropdownButton.propTypes.availableFilters,
  availableFilterLabels: ToggleFilterDropdownButton.propTypes.availableFilterLabels,
  availableFilterTypes: ToggleFilterDropdownButton.propTypes.availableFilterTypes,
  onRemove: AddedFilter.propTypes.onRemove,
  onAdd: ToggleFilterDropdownButton.propTypes.onAdd,
};

export default Filters;
