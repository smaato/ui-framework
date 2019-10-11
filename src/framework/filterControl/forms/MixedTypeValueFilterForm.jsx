
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

import {
  Filter,
  FilterOption,
} from '../../services';

import CheckBox from '../../checkBox/CheckBox.jsx';
import MixedTypeValueFilter from '../../services/filter/MixedTypeValueFilter';
import PrimaryButton from '../../button/PrimaryButton.jsx';

export default class MixedTypeValueFilterForm extends Component {

  constructor(props) {
    super(props);

    this.onCheckBoxClick = this.onCheckBoxClick.bind(this);
    this.onClickAddButton = this.onClickAddButton.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);

    this.options = props.filterOption.comparisonParameters.options;

    let selectedOptions;
    if (this.props.comparisonValue) {
      selectedOptions = this.options.map(option =>
        Boolean(props.comparisonValue.discreteValues.find(
          element => element.value === option.value)
        )
      );
    } else {
      selectedOptions = (new Array(this.options.length)).fill(false);
    }

    this.state = {
      selectedOptions,
    };
  }

  onCheckBoxClick(index) {
    const selectedOptions = this.state.selectedOptions.slice();
    selectedOptions[index] = !selectedOptions[index];
    this.setState({
      selectedOptions,
    });
  }

  onClickAddButton() {
    const inputValue = this.refs.inputValue.value;
    const discreteValues = this.options.filter(
      (value, index) => this.state.selectedOptions[index]
    );

    if (!inputValue.trim() && !discreteValues.length) {
      return;
    }

    const filter = new Filter(
      this.props.filterOption,
      new MixedTypeValueFilter(discreteValues, inputValue)
    );

    this.props.onAddFilter(filter);
  }

  onKeyUp(event) {
    if (event.key !== 'Enter') return;
    this.onClickAddButton();
  }

  render() {
    const options = this.options.map((option, index) => (
      <div className="filterForm--multiSelect__checkbox" key={index}>
        <CheckBox
          checked={this.state.selectedOptions[index]}
          id={index}
          key={index}
          name="option_checkbox"
          onClick={() => this.onCheckBoxClick(index)}
          type="checkbox"
        />
        {option.label}
      </div>
    ));

    const inputDefaultValue = this.props.comparisonValue ?
      this.props.comparisonValue.inputValue : '';

    return (
      <div className="filterForm filterForm--multiSelect">
        {options}
        <div className="inputFilterForm__filterValueWrapper">
          <input
            className="inputFilterForm__enteredValue"
            defaultValue={inputDefaultValue}
            onKeyUp={this.onKeyUp}
            ref="inputValue"
            type="text"
          />
        </div>
        <div className="filterForm__buttons">
          <PrimaryButton
            onClick={this.onClickAddButton}
          >
            Update Results
          </PrimaryButton>
        </div>
      </div>
    );
  }
}

MixedTypeValueFilterForm.propTypes = {
  comparisonValue: PropTypes.object,
  filterOption: PropTypes.instanceOf(FilterOption),
  onAddFilter: PropTypes.func.isRequired,
};
