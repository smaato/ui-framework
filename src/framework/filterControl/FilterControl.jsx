
import React, {
  Component,
  PropTypes,
} from 'react';

import FilterFormDropdown from './filterDropdown/FilterFormDropdown.jsx';
import Filter from '../services/filter/Filter';
import FilterDropdown from './filterDropdown/FilterDropdown.jsx';
import FilterDropdownButton from './filterDropdown/FilterDropdownButton.jsx';
import FilterItem from './FilterItem.jsx';
import FilterOptionList
  from './filterDropdown/filterOptions/FilterOptionList.jsx';

export default class FilterControl extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDropdownOpen: false,
      selectedFilterOption: null,
    };

    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onAddFilter = this.onAddFilter.bind(this);
    this.onBackButtonClick = this.onBackButtonClick.bind(this);
    this.onDropdownClose = this.onDropdownClose.bind(this);
    this.onSelectFilterOption = this.onSelectFilterOption.bind(this);
  }

  onAddFilter(filter) {
    this.props.onAddFilter(filter);

    this.setState({
      isDropdownOpen: false,
      selectedFilterOption: null,
    });
  }

  onBackButtonClick() {
    this.setState({
      selectedFilterOption: null,
    });
  }

  onDropdownClose() {
    this.setState({
      isDropdownOpen: false,
      selectedFilterOption: null,
    });
  }

  onSelectFilterOption(filterOption) {
    this.setState({
      selectedFilterOption: filterOption,
    });
  }

  onAddButtonClick() {
    this.setState({
      isDropdownOpen: true,
      selectedFilterOption: null,
    });
  }

  renderDropdownContent() {
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

  renderFilterItems() {
    const filterItems = this.props.selectedFilters.map(filter => (
      <FilterItem
        filter={filter}
        key={filter.filterOption.name}
        onRemoveSelectedFilter={this.props.onRemoveSelectedFilter}
        onReplaceFilter={this.props.onReplaceFilter}
      />
    ));

    let formDropdown;
    if (this.state.selectedFilterOption !== null) {
      formDropdown = (
        <FilterFormDropdown
          filterOption={this.state.selectedFilterOption}
          onAddFilter={this.onAddFilter}
          onBackButtonClick={this.onBackButtonClick}
        />
      );
    }

    return (
      <div className="filterItemList">
        {filterItems}
        {formDropdown}
      </div>
    );
  }

  render() {
    let addButton;
    if (this.props.filterOptions.length > 0) {
      let filterDropdown;
      if (this.state.isDropdownOpen && !this.state.selectedFilterOption) {
        filterDropdown = (
          <FilterDropdown>
            {this.renderDropdownContent()}
          </FilterDropdown>
        );
      }

      addButton = (
        <div className="filterDropdownContainer">
          <FilterDropdownButton
            isOpen={this.state.isDropdownOpen}
            onClick={this.onAddButtonClick}
          />
          {filterDropdown}
        </div>
      );
    }

    return (
      <div className="filterControl">
        {this.renderFilterItems()}
        {addButton}
      </div>
    );
  }

}

FilterControl.propTypes = {
  filterOptions: FilterOptionList.propTypes.filterOptions,
  onAddFilter: PropTypes.func.isRequired,
  onRemoveSelectedFilter: FilterItem.propTypes.onRemoveSelectedFilter,
  onReplaceFilter: PropTypes.func.isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.instanceOf(Filter)).isRequired,
};
