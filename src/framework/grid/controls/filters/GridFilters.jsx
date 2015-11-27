
import React, {
  Component,
  PropTypes,
} from 'react';

import IconEllipsis from '../../../iconEllipsis/IconEllipsis.jsx';
import GridFilter from './GridFilter.jsx';

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
        onRemove={this.props.onRemove.bind(this)}
      />
    );

    return (
      <div className="gridFilters">
        {filters}
        <div
          className="gridFilter__add"
          onClick={() => this.props.onAdd('FilterName', 'FilterValue')}
        >+</div>
        <div className="gridFilter__ellipsis">
          <IconEllipsis/>
        </div>
      </div>
    );
  }
}

GridFilters.propTypes = {
  filtersConfig: PropTypes.array.isRequired,
  onRemove: GridFilter.propTypes.onRemove,
  onAdd: PropTypes.func.isRequired,
};
