
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

import {
  Filter,
} from '../services';

import FilterDropdown from './filterDropdown/FilterDropdown.jsx';
import FilterDropdownButton from './filterDropdown/FilterDropdownButton.jsx';
import FilterFormDropdown from './filterDropdown/FilterFormDropdown.jsx';
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
    this.onClickAnywhere = this.onClickAnywhere.bind(this);
    this.onDropdownClose = this.onDropdownClose.bind(this);
    this.onSelectFilterOption = this.onSelectFilterOption.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.onClickAnywhere);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickAnywhere);
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

  onClickAnywhere(event) {
    if (
      this.state.isDropdownOpen &&
      !this.dropdown.contains(event.target)
    ) {
      this.setState({
        isDropdownOpen: false,
      });
    } else if (
      this.state.selectedFilterOption !== null &&
      !this.formDropdown.contains(event.target)
    ) {
      this.setState({
        selectedFilterOption: null,
      });
    }
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
        <div ref={(div) => { this.formDropdown = div; }}>
          {formDropdown}
        </div>
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
        <div
          className="filterDropdownContainer"
          ref={(div) => { this.dropdown = div; }}
        >
          <FilterDropdownButton
            isOpen={this.state.isDropdownOpen}
            onClick={this.onAddButtonClick}
          />
          {filterDropdown}
        </div>
      );
    }

    return (
      <div data-testid="FilterControl" className="filterControl">
        {this.renderFilterItems()}
        {addButton}
      </div>
    );
  }

}

FilterControl.propTypes = {
  filterOptions: FilterOptionList.propTypes.filterOptions,
  onAddFilter: PropTypes.func,
  onRemoveSelectedFilter: FilterItem.propTypes.onRemoveSelectedFilter,
  onReplaceFilter: PropTypes.func.isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.instanceOf(Filter)).isRequired,
};
