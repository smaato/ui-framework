
import React, {
  Component,
} from 'react';
import classNames from 'classnames';
import FilterDropdown from './FilterDropdown.jsx';

export default class ToggleFilterDropdownButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
    };
  }

  onClick() {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen,
    });
  }

  onAdd(filterName, filterValue) {
    this.props.onAdd(filterName, filterValue);
    this.setState({
      isDropdownOpen: false,
    });
  }

  render() {
    const dropdown = this.state.isDropdownOpen ?
      <FilterDropdown
        onAdd={this.onAdd.bind(this)}
        availableFilters={this.props.availableFilters}
      /> :
      null;

    const rootClass = classNames('toggleFilterDropdownButton', {
      'toggleFilterDropdownButton--dropdown-opened': this.state.isDropdownOpen,
    });

    return (
      <div
        className={rootClass}
        onClick={this.onClick.bind(this)}
      >
        +
        {dropdown}
      </div>
    );
  }
}

ToggleFilterDropdownButton.propTypes = {
  onAdd: FilterDropdown.propTypes.onAdd,
  availableFilters: FilterDropdown.propTypes.availableFilters,
};
