
import React, {
  Component,
  PropTypes,
} from 'react';

export default class AvailableFilters extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const availableFilters = this.props.availableFilters.map((filterName, index) => {
      const filterLabel = this.props.availableFilterLabels[index];
      return (
        <div
          className="availableFilter"
          key={index}
          onClick={() => this.props.onClick(filterName, filterLabel)}
        >
          {filterLabel}
        </div>
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
  availableFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  availableFilterLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
