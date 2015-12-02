
import React, {
  PropTypes,
} from 'react';

import ToggleFilterDropdownButton from './dropdown/ToggleFilterDropdownButton.jsx';
import AddedFilter from './AddedFilter.jsx';

const Filters = props => {
  const addedFilters = props.addedFilters.map(
    (filter, index) =>
      <AddedFilter
        filter={filter}
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
      />
    </div>
  );
};

Filters.propTypes = {
  addedFilters: PropTypes.arrayOf(PropTypes.object),
  availableFilters: ToggleFilterDropdownButton.propTypes.availableFilters,
  onRemove: AddedFilter.propTypes.onRemove,
  onAdd: ToggleFilterDropdownButton.propTypes.onAdd,
};

export default Filters;
