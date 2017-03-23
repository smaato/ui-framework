
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Filter,
  FilterOption,
} from '../../services';

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
          {this.props.filterOption.name}
        </div>
        <div className="singleSelectionForm__filterValueWrapper">
          <input
            className="singleSelectionForm__enteredValue"
            defaultValue={this.props.comparisonValue}
            onKeyUp={this.onKeyUp}
            ref="enteredValue"
            type="text"
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
  comparisonValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  filterOption: PropTypes.instanceOf(FilterOption).isRequired,
  onAddFilter: PropTypes.func.isRequired,
};
