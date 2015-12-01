
import React, {
  Component,
  PropTypes,
} from 'react';

import AvailableFilters from './AvailableFilters.jsx';
import FilterValueEditor from './FilterValueEditor.jsx';

export default class FilterDropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addedFilterName: null,
      addedFilterLabel: null,
    };
  }

  onFilterNameSelect(filterName, filterLabel) {
    this.setState({
      addedFilterName: filterName,
      addedFilterLabel: filterLabel,
    });
  }

  onBackToFilterNames() {
    this.setState({
      addedFilterName: null,
      addedFilterLabel: null,
    });
  }

  onAdd(filterName, filterLabel, filterValue) {
    this.props.onAdd(
      filterName,
      filterLabel,
      filterValue
    );
    this.setState({
      addedFilterName: null,
      addedFilterLabel: null,
    });
  }

  render() {
    const availableFilterOrValue = !this.state.addedFilterName ?
      <AvailableFilters
        availableFilters={this.props.availableFilters}
        availableFilterLabels={this.props.availableFilterLabels}
        onClick={
          (filterName, filterLabel) =>
            this.onFilterNameSelect.bind(this)(filterName, filterLabel)
        }
      /> :
      <FilterValueEditor
        filterName={this.state.addedFilterName}
        filterLabel={this.state.addedFilterLabel}
        onBack={this.onBackToFilterNames.bind(this)}
        onAdd={this.props.onAdd}
      />;

    return (
      <div
        className="filterDropdown"
        // Since it is inside ToggleFilterDropdownButton, which has it's own
        // onClick, that will be triggered if propagation is not stopped
        onClick={event => event.stopPropagation()}
      >
        {availableFilterOrValue}
      </div>
    );
  }
}

FilterDropdown.propTypes = {
  onAdd: PropTypes.func.isRequired,
  availableFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  availableFilterLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};
