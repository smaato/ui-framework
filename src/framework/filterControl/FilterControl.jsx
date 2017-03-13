
import React, {
  Component,
  PropTypes,
} from 'react';

import CreateFilterFormDropdown
  from './filterDropdown/CreateFilterFormDropdown.jsx';
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
      (
        <FilterItem
          filter={filter}
          key={filter.filterOption.name}
          onRemoveSelectedFilter={this.props.onRemoveSelectedFilter}
          onReplaceFilter={this.props.onReplaceFilter}
        />
      )
    ));

    return (
      <div className="filterItemList">
        {filterItems}
        {this.state.selectedFilterOption !== null &&
          <CreateFilterFormDropdown
            filterOption={this.state.selectedFilterOption}
            onAddFilter={this.onAddFilter}
            onBackButtonClick={this.onBackButtonClick}
          />
        }
      </div>
    );
  }

  render() {
    let addButton;
    if (this.props.filterOptions.length > 0) {
      addButton = (
        <div className="filterDropdownContainer">
          <FilterDropdownButton
            onClick={this.onAddButtonClick}
            isOpen={this.state.isDropdownOpen}
          />
          {this.state.isDropdownOpen && !this.state.selectedFilterOption &&
            <FilterDropdown>
              {this.renderDropdownContent()}
            </FilterDropdown>
          }
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
