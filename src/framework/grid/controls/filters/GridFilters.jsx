
import React, {
  Component,
  PropTypes,
} from 'react';

import AddFilterButton from './AddFilterButton.jsx';
import GridFilter from './GridFilter.jsx';
import GridFiltersEllipsis from './GridFiltersEllipsis.jsx';

export default class GridFilters extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const filters = this.props.filtersConfig.map(
      (filter, index) =>
        <GridFilter
          {...filter}
          key={index}
          onRemove={this.props.onRemove}
        />
    );

    return (
      <div className="gridFilters">
        {filters}
        <AddFilterButton
          onAdd={this.props.onAdd}
        />
        <GridFiltersEllipsis/>
      </div>
    );
  }
}

GridFilters.propTypes = {
  filtersConfig: PropTypes.array.isRequired,
  onRemove: GridFilter.propTypes.onRemove,
  onAdd: AddFilterButton.propTypes.onAdd,
};
