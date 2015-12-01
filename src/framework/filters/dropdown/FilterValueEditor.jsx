
import React, {
  Component,
  PropTypes,
} from 'react';

export default class FilterValueEditor extends Component {

  constructor(props) {
    super(props);
  }

  onAdd() {
    const filterValue = this.refs.filterValue.value;
    if (!filterValue.trim()) {
      return;
    }
    const filterId = this.props.filterName +
      this.props.filterType + filterValue;
    this.props.onAdd(
      filterId,
      this.props.filterName,
      this.props.filterLabel,
      this.props.filterType,
      filterValue
    );
  }

  onKeyUp(event) {
    if (event.key !== 'Enter') return;
    this.onAdd();
  }

  render() {
    setTimeout(() => this.refs.filterValue.focus());

    return (
      <div className="filterValueEditor">
        <div className="filterValueEditor__filterName">
          {`${this.props.filterLabel} (${this.props.filterType})`}
        </div>
        <div className="filterValueEditor__filterValueWrapper">
          <input
            ref="filterValue"
            type="text"
            className="filterValueEditor__filterValue"
            onKeyUp={this.onKeyUp.bind(this)}
          />
        </div>
        <div className="filterValueEditor__buttons">
          <button onClick={this.props.onBack}>
            &lt; Back
          </button>
          <button onClick={this.onAdd.bind(this)}>
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
  filterLabel: PropTypes.string.isRequired,
  filterType: PropTypes.string.isRequired,
};
