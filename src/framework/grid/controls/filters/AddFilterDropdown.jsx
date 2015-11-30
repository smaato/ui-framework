
import React, {
  Component,
  PropTypes,
} from 'react';

export default class AddFilterDropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFilterName: null,
    };
  }

  onFilterNameClick(filterName) {
    this.setState({
      selectedFilterName: filterName,
    });
  }

  onBackToAllFiltersClick() {
    this.setState({
      selectedFilterName: null,
    });
  }

  render() {
    const allFilters = this.props.allFilters.map((filterName, index) => {
      return (
        <div
          className="gridAllFilters__item"
          key={index}
          onClick={() => {
            this.onFilterNameClick.bind(this)(filterName);
          }}
        >
          {filterName}
        </div>
      );
    });

    const filterValueView = (
      <div className="filterValueEditor">
        <div className="filterValueEditor__filterName">
          {this.state.selectedFilterName}
        </div>
        <div className="filterValueEditor__filterValueWrap">
          <input
            ref="filterValue"
            type="text"
            className="filterValueEditor__filterValue"
          />
        </div>
        <div className="filterValueEditor__buttons">
          <button onClick={this.onBackToAllFiltersClick.bind(this)}>
            &lt; Back
          </button>
          <button
            onClick={() => {
              const filterValue = this.refs.filterValue.value;
              if (!filterValue) {
                return;
              }
              this.props.onAdd(
                this.state.selectedFilterName,
                filterValue
              );
              this.setState({
                selectedFilterName: null,
              });
            }}
          >
            + Add
          </button>
        </div>
      </div>
    );

    return (
      <div className="gridAddFilterDropdown" onClick={event => event.stopPropagation()}>
        {!this.state.selectedFilterName ? allFilters : filterValueView}
      </div>
    );
  }
}

AddFilterDropdown.propTypes = {
  onAdd: PropTypes.func.isRequired,
  allFilters: PropTypes.array.isRequired,
};
