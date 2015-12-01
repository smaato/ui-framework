
import React, {
  Component,
  PropTypes,
} from 'react';
import FilterValueEditor from './FilterValueEditor.jsx';

export default class AvailableFilters extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const availableFilters = this.props.availableFilters.map((filterName, filterNameIndex) => {
      const filterLabel = this.props.availableFilterLabels[filterNameIndex];
      const filterTypes = this.props.availableFilterTypes[filterNameIndex];
      return filterTypes.map(
        (filterType, filterTypeIndex) => (
          <div
            className="availableFilter"
            key={`${filterNameIndex}:${filterTypeIndex}`}
            onClick={() => this.props.onClick(filterName, filterLabel, filterType)}
          >
            {filterTypes.length === 1 ? filterLabel : `${filterLabel} (${filterType})`}
          </div>
        )
      );
    });

    return (
      <div className="availableFilters">
        {availableFilters}
      </div>
    );
  }
}

AvailableFilters.propTypes = {
  availableFilters: PropTypes.arrayOf(FilterValueEditor.propTypes.filterName).isRequired,
  availableFilterLabels: PropTypes.arrayOf(FilterValueEditor.propTypes.filterLabel).isRequired,
  availableFilterTypes: PropTypes.arrayOf(PropTypes.array).isRequired,
  onClick: PropTypes.func.isRequired,
};
