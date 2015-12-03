
import React, {
  Component,
  PropTypes,
} from 'react';

import FiltersDropdown from './filtersDropdown/FiltersDropdown.jsx';
import FiltersDropdownButton from './filtersDropdown/FiltersDropdownButton.jsx';
import FilterOptionList from './filterOptions/FilterOptionList.jsx';
import ConditionCheckerForm from './conditionCheckers/ConditionCheckerForm.jsx';
import ConditionCheckerList from './conditionCheckers/ConditionCheckerList.jsx';

export default class FiltersControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      selectedFilterOption: null,
      selectedComparisonType: null,
    };
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

  render() {
    let dropdown;

    if (this.state.isDropdownOpen) {
      let dropdownContent;

      if (this.state.selectedFilterOption) {
        // If we have a selected filter, then we can create a filter matcher
        // from it.
        dropdownContent = (
          <ConditionCheckerForm
            filterOption={this.state.selectedFilterOption}
            comparisonType={this.state.selectedComparisonType}
            onAddConditionChecker={this.onAddConditionChecker.bind(this)}
            onCancelConditionChecker={this.onCancelConditionChecker.bind(this)}
          />
        );
      } else {
        // If we don't have a selected filter yet, then we're in the process
        // of selecting one.
        dropdownContent = (
          <FilterOptionList
            filterOptions={this.props.filterOptions}
            onSelectFilterOption={this.onSelectFilterOption.bind(this)}
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

        <ConditionCheckerList
          conditionCheckers={this.props.conditionCheckers}
          onRemoveConditionChecker={this.props.onRemoveConditionChecker}
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
  conditionCheckers: ConditionCheckerList.propTypes.conditionCheckers,
  filterOptions: FilterOptionList.propTypes.filterOptions,
  onAddConditionChecker: PropTypes.func.isRequired,
  onRemoveConditionChecker: ConditionCheckerList.propTypes.onRemoveConditionChecker,
};

export default FiltersControl;
