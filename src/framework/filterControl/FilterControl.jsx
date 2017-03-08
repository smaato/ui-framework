
import React, {
  Component,
  PropTypes,
} from 'react';

import FilterDropdown from './filterDropdown/FilterDropdown.jsx';
import FilterDropdownButton from './filterDropdown/FilterDropdownButton.jsx';
import FilterForm from './filterSelections/forms/FilterForm.jsx';
import FilterOptionList
  from './filterDropdown/filterOptions/FilterOptionList.jsx';
import SelectedFilterList from './filterSelections/SelectedFilterList.jsx';

export default class FilterControl extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDropdownOpen: false,
      selectedFilterOption: null,
    };

    this.onAddFilter = this.onAddFilter.bind(this);
    this.onCancelFilter = this.onCancelFilter.bind(this);
    this.onDropdownClose = this.onDropdownClose.bind(this);
    this.onSelectFilterOption = this.onSelectFilterOption.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
  }

  onAddFilter(filter) {
    this.props.onAddFilter(filter);

    this.setState({
      isDropdownOpen: false,
      selectedFilterOption: null,
    });
  }

  onCancelFilter() {
    this.setState({
      isDropdownOpen: true,
      selectedFilterOption: null,
    });
  }

  onDropdownClose() {
    this.setState({
      isDropdownOpen: false,
      selectedFilterOption: null,
    });
  }

  onSelectFilterOption(filter) {
    this.setState({
      isDropdownOpen: true,
      selectedFilterOption: filter,
    });
  }

  onToggleClick() {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen,
      selectedFilterOption: null,
    });
  }

  renderDropdownContent() {
    // If we don't have a selected filter yet, then we're in the process
    // of selecting one.
    if (!this.state.selectedFilterOption) {
      return (
        <div>
          <div className="filterDropdown__header">
            <div className="filterDropdown__header__title">
              Add a Filter
            </div>
            <span
              className="filterDropdown__header__closeButton"
              onClick={this.onDropdownClose}
            />
          </div>
          <FilterOptionList
            filterOptions={this.props.filterOptions}
            onSelectFilterOption={this.onSelectFilterOption}
          />
        </div>
      );
    }

    // If we have a selected filter, then we can create a filter matcher
    // from it.
    return (
      <div>
        <div className="filterDropdown__header">
          <span
            className="filterDropdown__header__backButton"
            onClick={this.onCancelFilter}
          />
          <div className="filterDropdown__header__title">
            {this.state.selectedFilterOption.name}
          </div>
        </div>
        <FilterForm
          filterOption={this.state.selectedFilterOption}
          onAddFilter={this.onAddFilter}
        />
      </div>
    );
  }

  render() {
    let dropdown;

    if (this.state.isDropdownOpen) {
      dropdown = (
        <FilterDropdown>
          {this.renderDropdownContent()}
        </FilterDropdown>
      );
    }

    let addButton;
    if (this.props.filterOptions.length > 0) {
      addButton = (
        <div className="filterDropdownContainer">
          <FilterDropdownButton
            onClick={this.onToggleClick}
            isOpen={this.state.isDropdownOpen}
          />
          {dropdown}
        </div>
      );
    }
    return (
      <div className="filterControl">
        <SelectedFilterList
          onRemoveSelectedFilter={this.props.onRemoveSelectedFilter}
          selectedFilters={this.props.selectedFilters}
        />
        {addButton}
      </div>
    );
  }

}

FilterControl.propTypes = {
  filterOptions: FilterOptionList.propTypes.filterOptions,
  onAddFilter: PropTypes.func.isRequired,
  onRemoveSelectedFilter:
    SelectedFilterList.propTypes.onRemoveSelectedFilter,
  selectedFilters: SelectedFilterList.propTypes.selectedFilters,
};
