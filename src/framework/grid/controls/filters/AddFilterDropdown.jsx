
import React, {
  Component,
  PropTypes,
} from 'react';

import AddFilterNames from './AddFilterNames.jsx';
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

  onBackToFilterNames() {
    this.setState({
      selectedFilterName: null,
    });
  }

  render() {
    const addFilterNameOrValue = !this.state.selectedFilterName ?
      <AddFilterNames
        filterNames={this.props.allFilters}
        onClick={filterName => this.onFilterNameSelect.bind(this)(filterName)}
      /> :
      <AddFilterValue
        filterName={this.state.selectedFilterName}
        onBack={this.onBackToFilterNames.bind(this)}
        onAdd={this.props.onAdd}
      />;

    return (
      <div
        className="addFilterDropdown"
        // Since it is inside AddFilterButton, which has it's own onClick
        onClick={event => event.stopPropagation()}
      >
        {addFilterNameOrValue}
      </div>
    );
  }
}

AddFilterDropdown.propTypes = {
  onAdd: PropTypes.func.isRequired,
  allFilters: PropTypes.array.isRequired,
};
