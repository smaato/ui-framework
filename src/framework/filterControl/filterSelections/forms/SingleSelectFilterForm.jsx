
import React, {
  Component,
  PropTypes,
} from 'react';

import FilterOption from '../../../services/filter/FilterOption';
import Filter from '../../../services/filter/Filter';

export default class SingleSelectFilterForm extends Component {

  constructor(props) {
    super(props);

    this.onClickAddButton = this.onClickAddButton.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  componentDidMount() {
    this.refs.enteredValue.focus();
  }

  onClickAddButton() {
    const enteredValue = this.refs.enteredValue.value;
    if (!enteredValue.trim()) {
      return;
    }

    const filter =
      new Filter(
        this.props.filterOption,
        this.props.comparisonType,
        enteredValue
      );

    this.props.onAddFilter(filter);
  }

  onKeyUp(event) {
    if (event.key !== 'Enter') return;
    this.onClickAddButton();
  }

  render() {
    return (
      <div className="singleSelectionForm">
        <div className="singleSelectionForm__filterName">
          {`${this.props.filterOption.name} (${this.props.comparisonType})`}
        </div>
        <div className="singleSelectionForm__filterValueWrapper">
          <input
            ref="enteredValue"
            type="text"
            className="singleSelectionForm__enteredValue"
            onKeyUp={this.onKeyUp}
          />
        </div>
        <div className="singleSelectionForm__buttons">
          <button onClick={this.onClickAddButton}>
            + Add
          </button>
        </div>
      </div>
    );
  }
}

SingleSelectFilterForm.propTypes = {
  filterOption: PropTypes.instanceOf(FilterOption),
  comparisonType: PropTypes.string.isRequired,
  onAddFilter: PropTypes.func.isRequired,
};
