
import React, {
  Component,
  PropTypes,
} from 'react';

export default class AddFilterValue extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="addFilterValue">
        <div className="addFilterValue__filterName">
          {this.props.filterName}
        </div>
        <div className="addFilterValue__filterValueWrapper">
          <input
            ref="filterValue"
            type="text"
            className="addFilterValue__filterValue"
          />
        </div>
        <div className="addFilterValue__buttons">
          <button onClick={this.props.onBack}>
            &lt; Back
          </button>
          <button
            onClick={() => {
              const filterValue = this.refs.filterValue.value;
              if (!filterValue.trim()) {
                return;
              }
              this.props.onAdd(
                this.props.filterName,
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
  }
}

AddFilterValue.propTypes = {
  onBack: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};
