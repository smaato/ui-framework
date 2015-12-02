
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
    // Id is only for removing filter
    const filterId = this.props.filter.name + this.props.filter.type + filterValue;
    const addedFilter = Object.assign({
      id: filterId,
      value: filterValue,
    }, this.props.filter);

    this.props.onAdd(addedFilter);
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
          {`${this.props.filter.name} (${this.props.filter.type})`}
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
  filter: PropTypes.object.isRequired,
};
