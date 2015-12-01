
import React, {
  Component,
  PropTypes,
} from 'react';

export default class AvailableFilterNames extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const filterNames = this.props.filterNames.map((filterName, index) => (
      <div
        className="availableFilterName"
        key={index}
        onClick={() => this.props.onClick(filterName)}
      >
        {filterName}
      </div>
    ));

    return (
      <div className="availableFilterNames">
        {filterNames}
      </div>
    );
  }
}

AvailableFilterNames.propTypes = {
  filterNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
