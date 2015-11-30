
import React, {
  Component,
} from 'react';
import classNames from 'classnames';
import AddFilterDropdown from './AddFilterDropdown.jsx';

export default class AddFilterButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
    };
  }

  render() {
    const dropdown = this.state.isDropdownOpen ?
      <AddFilterDropdown
        onAdd={
          (filterName, filterValue) => {
            this.props.onAdd(filterName, filterValue);
            this.setState({
              isDropdownOpen: false,
            });
          }
        }
        allFilters={this.props.allFilters}
      /> :
      null;

    const rootClass = classNames('addFilterButton', {
      'addFilterButton--dropdown-opened': this.state.isDropdownOpen,
    });

    return (
      <div
        className={rootClass}
        onClick={()=>{
          this.setState({
            isDropdownOpen: !this.state.isDropdownOpen,
          });
        }}
      >
        +
        {dropdown}
      </div>
    );
  }
}

AddFilterButton.propTypes = {
  onAdd: AddFilterDropdown.propTypes.onAdd,
  allFilters: AddFilterDropdown.propTypes.allFilters,
};
