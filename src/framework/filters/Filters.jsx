
import React, {
  Component,
  PropTypes,
} from 'react';

import ToggleFilterDropdownButton from './dropdown/ToggleFilterDropdownButton.jsx';
import AddedFilter from './AddedFilter.jsx';
// import FilterEllipsis from './FilterEllipsis.jsx';

export default class Filters extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const addedFilters = this.props.addedFilters.map(
      (filter, index) =>
        <AddedFilter
          {...filter}
          key={index}
          onRemove={this.props.onRemove}
        />
    );

    return (
      <div className="filters">
        {addedFilters}
        <ToggleFilterDropdownButton
          onAdd={this.props.onAdd}
          availableFilters={this.props.availableFilters}
        />
        {/* TODO: Unclear requirements for this feature */}
        {/* <FilterEllipsis/> */}
      </div>
    );
  }
}

Filters.propTypes = {
  addedFilters: PropTypes.arrayOf(PropTypes.object),
  availableFilters: ToggleFilterDropdownButton.propTypes.availableFilters,
  onRemove: AddedFilter.propTypes.onRemove,
  onAdd: ToggleFilterDropdownButton.propTypes.onAdd,
};
