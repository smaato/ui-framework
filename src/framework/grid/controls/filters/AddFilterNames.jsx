
import React, {
  Component,
  PropTypes,
} from 'react';

export default class AddFilterNames extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const filterNames = this.props.filterNames.map((filterName, index) => (
      <div
        className="addFilterName"
        key={index}
        onClick={() => this.props.onClick(filterName)}
      >
        {filterName}
      </div>
    ));

    return (
      <div className="addFilterNames">
        {filterNames}
      </div>
    );
  }
}

AddFilterNames.propTypes = {
  filterNames: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
