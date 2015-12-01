
import React, {
  Component,
  PropTypes,
} from 'react';

import AvailableFilterNames from './AvailableFilterNames.jsx';
import FilterValueEditor from './FilterValueEditor.jsx';

export default class FilterDropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addedFilterName: null,
    };
  }

  onFilterNameSelect(filterName) {
    this.setState({
      addedFilterName: filterName,
    });
  }

  onBackToFilterNames() {
    this.setState({
      addedFilterName: null,
    });
  }

  render() {
    const availableFilterNameOrValue = !this.state.addedFilterName ?
      <AvailableFilterNames
        filterNames={this.props.availableFilters}
        onClick={filterName => this.onFilterNameSelect.bind(this)(filterName)}
      /> :
      <FilterValueEditor
        filterName={this.state.addedFilterName}
        onBack={this.onBackToFilterNames.bind(this)}
        onAdd={this.props.onAdd}
      />;

    return (
      <div
        className="filterDropdown"
        // Since it is inside ToggleFilterDropdownButton, which has it's own onClick
        onClick={event => event.stopPropagation()}
      >
        {availableFilterNameOrValue}
      </div>
    );
  }
}

FilterDropdown.propTypes = {
  onAdd: PropTypes.func.isRequired,
  availableFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
};
