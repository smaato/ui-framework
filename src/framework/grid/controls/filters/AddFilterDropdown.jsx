
import React, {
  Component,
  PropTypes,
} from 'react';

import AddFilterValue from './AddFilterValue.jsx';

export default class AddFilterDropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFilterName: null,
    };
  }

  onFilterNameSelect(filterName) {
    this.setState({
      selectedFilterName: filterName,
    });
  }

  onBackToAllFiltersClick() {
    this.setState({
      selectedFilterName: null,
    });
  }

  render() {
    const filterNames = this.props.allFilters.map((filterName, index) => (
      <div
        className="gridAllFilters__item"
        key={index}
        onClick={() => this.onFilterNameSelect.bind(this)(filterName)}
      >
        {filterName}
      </div>
    ));

    const filterValue = (
      <AddFilterValue
        filterName={this.state.selectedFilterName}
        onBack={this.onBackToAllFiltersClick.bind(this)}
      />
    );

    return (
      <div
        className="addFilterDropdown"
        // Since it is inside AddFilterButton, which has it's own onClick
        onClick={event => event.stopPropagation()}
      >
        {!this.state.selectedFilterName ? filterNames : filterValue}
      </div>
    );
  }
}

AddFilterDropdown.propTypes = {
  onAdd: PropTypes.func.isRequired,
  allFilters: PropTypes.array.isRequired,
};
