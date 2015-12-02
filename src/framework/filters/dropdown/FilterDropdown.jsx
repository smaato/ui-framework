
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

  onFilterNameSelect(filter) {
    this.setState({
      addedFilter: filter,
    });
  }

  onBackToFilterNames() {
    this.initState(false);
  }

  onAdd(filter) {
    this.props.onAdd(filter);
    this.initState(false);
  }

  initState(isInit) {
    const state = {
      addedFilter: null,
    };
    if (isInit) {
      this.state = state;
    } else {
      this.setState(state);
    }
  }

  render() {
    let subView;

    if (!this.state.addedFilter) {
      subView = (
        <AvailableFilters
          availableFilters={this.props.availableFilters}
          onClick={
            (filter) =>
              this.onFilterNameSelect.bind(this)(filter)
          }
        />
      );
    } else {
      subView = (
        <FilterValueEditor
          filter={this.state.addedFilter}
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
};
