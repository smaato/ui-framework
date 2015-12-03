
import React, {
  Component,
  PropTypes,
} from 'react';

import FiltersDropdown from './filtersDropdown/FiltersDropdown.jsx';
import FiltersDropdownButton from './filtersDropdown/FiltersDropdownButton.jsx';
import FiltersList from './filters/FiltersList.jsx';
import FilterMatcherForm from './filterMatchers/FilterMatcherForm.jsx';
import FilterMatchersList from './filterMatchers/FilterMatchersList.jsx';

import FilterMatcher from '../services/FilterMatcher';

export default class FiltersControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      selectedFilter: null,
      selectedMethod: null,
    };
  }

  onToggleClick() {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen,
      selectedFilter: null,
      selectedMethod: null,
    });
  }

  onSelectFilter(filter, method) {
    this.setState({
      isDropdownOpen: true,
      selectedFilter: filter,
      selectedMethod: method,
    });
  }

  onAddFilterMatcher(filterMatcher) {
    this.props.onAddFilterMatcher(filterMatcher);
    this.setState({
      isDropdownOpen: false,
      selectedFilter: null,
      selectedMethod: null,
    });
  }

  onCancelFilterMatcher() {
    this.setState({
      isDropdownOpen: true,
      selectedFilter: null,
      selectedMethod: null,
    });
  }

  render() {
    let dropdown;

    if (this.state.isDropdownOpen) {
      let dropdownContent;

      if (this.state.selectedFilter) {
        // If we have a selected filter, then we can create a filter matcher
        // from it.
        dropdownContent = (
          <FilterMatcherForm
            filter={this.state.selectedFilter}
            method={this.state.selectedMethod}
            onAddFilterMatcher={this.onAddFilterMatcher.bind(this)}
            onCancelFilterMatcher={this.onCancelFilterMatcher.bind(this)}
          />
        );
      } else {
        // If we don't have a selected filter yet, then we're in the process
        // of selecting one.
        dropdownContent = (
          <FiltersList
            filters={this.props.filters}
            onSelectFilter={this.onSelectFilter.bind(this)}
          />
        );
      }

      dropdown = (
        <FiltersDropdown>
          {dropdownContent}
        </FiltersDropdown>
      );
    }

    return (
      <div className="filtersControl">

        <FilterMatchersList
          filterMatchers={this.props.filterMatchers}
          onRemoveFilterMatcher={this.props.onRemoveFilterMatcher}
        />

        <div className="filtersDropdownContainer">
          <FiltersDropdownButton
            onClick={this.onToggleClick.bind(this)}
            isOpen={this.state.isDropdownOpen}
          />
          {dropdown}
        </div>

      </div>
    );
  }

}

FiltersControl.propTypes = {
  filterMatchers: PropTypes.arrayOf(PropTypes.instanceOf(FilterMatcher)),
  filters: FiltersList.propTypes.filters,
  onAddFilterMatcher: PropTypes.func.isRequired,
  onRemoveFilterMatcher: FilterMatchersList.propTypes.onRemoveFilterMatcher,
};

export default FiltersControl;
