
import React, {
  Component,
  PropTypes,
} from 'react';

import AddFilterButton from './AddFilterButton.jsx';
import GridSelectedFilter from './GridSelectedFilter.jsx';
// import GridFiltersEllipsis from './GridFiltersEllipsis.jsx';

export default class GridFilters extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const selectedFilters = this.props.selectedFilters.map(
      (filter, index) =>
        <GridSelectedFilter
          {...filter}
          key={index}
          onRemove={this.props.onRemove}
        />
    );

    return (
      <div className="gridFilters">
        {selectedFilters}
        <AddFilterButton
          onAdd={this.props.onAdd}
          allFilters={this.props.allFilters}
        />
        {/* TODO: Unclear requirements for this feature */}
        {/* <GridFiltersEllipsis/> */}
      </div>
    );
  }
}

GridFilters.propTypes = {
  selectedFilters: PropTypes.array,
  allFilters: AddFilterButton.propTypes.allFilters,
  onRemove: GridSelectedFilter.propTypes.onRemove,
  onAdd: AddFilterButton.propTypes.onAdd,
};
