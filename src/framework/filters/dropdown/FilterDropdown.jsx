
import React, {
  Component,
  PropTypes,
} from 'react';

import AvailableFilters from './AvailableFilters.jsx';
import FilterValueEditor from './FilterValueEditor.jsx';

export default class FilterDropdown extends Component {

  constructor(props) {
    super(props);
    this.initState(true);
  }

  onFilterNameSelect(filterName, filterLabel, filterType) {
    this.setState({
      addedFilterName: filterName,
      addedFilterLabel: filterLabel,
      addedFilterType: filterType,
    });
  }

  onBackToFilterNames() {
    this.initState(false);
  }

  onAdd(filterId, filterName, filterLabel, filterType, filterValue) {
    this.props.onAdd(
      filterId,
      filterName,
      filterLabel,
      filterType,
      filterValue
    );
    this.initState(false);
  }

  initState(isInit) {
    const state = {
      addedFilterName: null,
      addedFilterLabel: null,
      addedFilterType: null,
    };
    if (isInit) {
      this.state = state;
    } else {
      this.setState(state);
    }
  }

  render() {
    let subView;

    if (!this.state.addedFilterName) {
      subView = (
        <AvailableFilters
          availableFilters={this.props.availableFilters}
          availableFilterLabels={this.props.availableFilterLabels}
          availableFilterTypes={this.props.availableFilterTypes}
          onClick={
            (filterName, filterLabel, filterType) =>
              this.onFilterNameSelect.bind(this)(filterName, filterLabel, filterType)
          }
        />
      );
    } else {
      subView = (
        <FilterValueEditor
          filterName={this.state.addedFilterName}
          filterLabel={this.state.addedFilterLabel}
          filterType={this.state.addedFilterType}
          onBack={this.onBackToFilterNames.bind(this)}
          onAdd={this.props.onAdd}
        />
      );
    }

    return (
      <div
        className="filterDropdown"
        // Since it is inside ToggleFilterDropdownButton, which has it's own
        // onClick, that will be triggered if propagation is not stopped
        onClick={event => event.stopPropagation()}
      >
        {subView}
      </div>
    );
  }
}

FilterDropdown.propTypes = {
  onAdd: PropTypes.func.isRequired,
  availableFilters: AvailableFilters.propTypes.availableFilters,
  availableFilterLabels: AvailableFilters.propTypes.availableFilterLabels,
  availableFilterTypes: AvailableFilters.propTypes.availableFilterTypes,
};
