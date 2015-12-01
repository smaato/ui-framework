
import React, {
  Component,
  PropTypes,
} from 'react';

export default class FilterValueEditor extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filterValueEditor">
        <div className="filterValueEditor__filterName">
          {this.props.filterName}
        </div>
        <div className="filterValueEditor__filterValueWrapper">
          <input
            ref="filterValue"
            type="text"
            className="filterValueEditor__filterValue"
          />
        </div>
        <div className="filterValueEditor__buttons">
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
                addedFilterName: null,
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

FilterValueEditor.propTypes = {
  onBack: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};
