
import React, {
  Component,
  PropTypes,
} from 'react';

import IconEllipsis from '../../../iconEllipsis/IconEllipsis.jsx';

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
      <div className="gridFilters">
        <div className="gridFilter">
          <span className="gridFilter__text">
            <strong className="gridFilter__name">Status:</strong>
            In Production
          </span>
          <span className="icon glyphicons-remove-2 gridFilter__remove"/>
        </div>
        <div className="gridFilter">
          <span className="gridFilter__text">
            <strong className="gridFilter__name">Cylinders:</strong>
            8+
          </span>
          <span className="icon glyphicons-remove-2 gridFilter__remove"/>
        </div>
        <div className="gridFilter">
          <span className="gridFilter__text">
            <strong className="gridFilter__name">Passengers:</strong>
            2+
          </span>
          <span className="icon glyphicons-remove-2 gridFilter__remove"/>
        </div>
        <div className="gridFilter">
          <span className="gridFilter__text">
            <strong className="gridFilter__name">Fuel Economy:</strong>
            10mpg+
          </span>
          <span className="icon glyphicons-remove-2 gridFilter__remove"/>
        </div>
        <div className="gridFilter">
          <span className="gridFilter__text">
            <strong className="gridFilter__name">Fuel:</strong>
            Not Electric
          </span>
          <span className="icon glyphicons-remove-2 gridFilter__remove"/>
        </div>
        <div className="gridFilter__add">+</div>
        <div className="gridFilter__ellipsis">
          <IconEllipsis/>
        </div>
      </div>
    );
  }
}

GridFilters.defaultProps = {
  onSearch: PropTypes.func.isRequired,
};
