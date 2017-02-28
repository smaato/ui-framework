
import React, {
  Component,
  PropTypes,
} from 'react';

import ConditionCheckerList from './filterSelections/ConditionCheckerList.jsx';
import FilterDropdown from './filterDropdown/FilterDropdown.jsx';
import FilterDropdownButton from './filterDropdown/FilterDropdownButton.jsx';
import FilterForm from './filterSelections/forms/FilterForm.jsx';
import FilterOptionList from
              './filterDropdown/filterOptions/FilterOptionList.jsx';

export default class FilterControl extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDropdownOpen: false,
      selectedFilterOption: null,
      selectedComparisonType: null,
    };

    this.onAddConditionChecker = this.onAddConditionChecker.bind(this);
    this.onCancelConditionChecker = this.onCancelConditionChecker.bind(this);
    this.onSelectFilterOption = this.onSelectFilterOption.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onDropdownClose = this.onDropdownClose.bind(this);
  }

  onToggleClick() {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen,
      selectedFilterOption: null,
      selectedComparisonType: null,
    });
  }

  onSelectFilterOption(filter, method) {
    this.setState({
      isDropdownOpen: true,
      selectedFilterOption: filter,
      selectedComparisonType: method,
    });
  }

  onAddConditionChecker(conditionChecker) {
    this.props.onAddConditionChecker(conditionChecker);
    this.setState({
      isDropdownOpen: false,
      selectedFilterOption: null,
      selectedComparisonType: null,
    });
  }

  onCancelConditionChecker() {
    this.setState({
      isDropdownOpen: true,
      selectedFilterOption: null,
      selectedComparisonType: null,
    });
  }

  onDropdownClose() {
    this.setState({
      isDropdownOpen: false,
      selectedComparisonType: null,
      selectedFilterOption: null,
    });
  }

  render() {
    let dropdown;

    if (this.state.isDropdownOpen) {
      let dropdownContent;

      if (this.state.selectedFilterOption) {
        // If we have a selected filter, then we can create a filter matcher
        // from it.
        dropdownContent = (
          <div>
            <div className="filterDropdown__header">
              <span
                className="css-icon back"
                onClick={this.onCancelConditionChecker}
              />
              {this.state.selectedFilterOption.name}
            </div>
            <FilterForm
              comparisonType={this.state.selectedComparisonType}
              filterOption={this.state.selectedFilterOption}
              onAddConditionChecker={this.onAddConditionChecker}
            />
          </div>
        );
      } else {
        // If we don't have a selected filter yet, then we're in the process
        // of selecting one.
        dropdownContent = (
          <div>
            <div className="filterDropdown__header">
              Add a Filter
              <span
                className="css-icon cross"
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

      dropdown = (
        <FilterDropdown>
          {dropdownContent}
        </FilterDropdown>
      );
    }

    return (
      <div className="filterControl">

        <ConditionCheckerList
          conditionCheckers={this.props.conditionCheckers}
          onRemoveConditionChecker={this.props.onRemoveConditionChecker}
        />

        <div className="filterDropdownContainer">
          <FilterDropdownButton
            onClick={this.onToggleClick}
            isOpen={this.state.isDropdownOpen}
          />
          {dropdown}
        </div>

      </div>
    );
  }

}

FilterControl.propTypes = {
  conditionCheckers: ConditionCheckerList.propTypes.conditionCheckers,
  filterOptions: FilterOptionList.propTypes.filterOptions,
  onAddConditionChecker: PropTypes.func.isRequired,
  onRemoveConditionChecker:
    ConditionCheckerList.propTypes.onRemoveConditionChecker,
};
