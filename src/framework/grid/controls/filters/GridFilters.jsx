
import React, {
  Component,
  PropTypes,
} from 'react';

export default class GridFilters extends Component {

  constructor(props) {
    super(props);
  }

  onSearch(event) {
    if (event.key !== 'Enter') return;
    const searchField = this.refs.searchField;
    this.props.onSearch(searchField.value);
  }

  render() {
    return (
      <div className="grid__filtersContainer">
        <div className="grid__filter">
          <span className="filterTitle">
            <strong>Status:</strong>
            In Production
          </span>
          <a className="remove" href="">
            <span className="icon glyphicons-remove-2"></span>
          </a>
        </div>
        <div className="grid__filter">
          <span className="filterTitle">
            <strong>Cylinders:</strong>
            8+
          </span>
          <a className="remove" href="">
            <span className="icon glyphicons-remove-2"></span>
          </a>
        </div>
        <div className="grid__filter">
          <span className="filterTitle">
            <strong>Passengers:</strong>
            2+
          </span>
          <a className="remove" href="">
            <span className="icon glyphicons-remove-2"></span>
          </a>
        </div>
        <div className="grid__filter">
          <span className="filterTitle">
            <strong>Fuel Economy:</strong>
            10mpg+
          </span>
          <a className="remove" href="">
            <span className="icon glyphicons-remove-2"></span>
          </a>
        </div>
        <div className="grid__filter">
          <span className="filterTitle">
            <strong>Fuel:</strong>
            Not Electric
          </span>
          <a className="remove" href="">
            <span className="icon glyphicons-remove-2"></span>
          </a>
        </div>
        <div className="grid__addFilter">
          <a href="#">+</a>
        </div>
        <div className="grid__ellipsis">
          <span className="icon glyphicons-more"></span>
        </div>
      </div>
    );
  }
}

GridFilters.defaultProps = {
  onSearch: PropTypes.func.isRequired,
};
