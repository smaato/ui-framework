
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
    let inputValue;
    if (this.props.comparisonValue) {
      selectedOptions = this.options.map(option =>
        Boolean(props.comparisonValue.discreteValues.find(
          element => element.value === option.value)
        )
      );
      inputValue = this.props.comparisonValue.inputValue;
    } else {
      selectedOptions = (new Array(this.options.length)).fill(false);
      inputValue = '';
    }

    this.state = {
      inputValue,
      selectedOptions,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.comparisonValue) {
      if (!this.deepEqualsProps(
          this.props.comparisonValue, prevProps.comparisonValue)) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          inputValue: this.props.comparisonValue.inputValue,
        });
      }
    }
  }

  onCheckBoxClick(index) {
    const selectedOptions = this.state.selectedOptions.slice();
    selectedOptions[index] = !selectedOptions[index];
    this.setState({
      selectedOptions,
    });
  }

  onClickAddButton() {
    const inputValue = this.state.inputValue;
    const discreteValues = this.options.filter(
      (value, index) => this.state.selectedOptions[index]
    );

    const filter = new Filter(
      this.props.filterOption,
      new MixedTypeValueFilter(discreteValues, inputValue)
    );

    this.props.onAddFilter(filter);
  }

  onKeyUp(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  deepEqualsProps(object1, object2) {
    return JSON.stringify(object1) === JSON.stringify(object2);
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

    const disableInputField = !this.state.selectedOptions
        .reduce((acc, option) => acc || option, !!this.state.inputValue.trim());

    return (
      <div className="filterForm filterForm--multiSelect">
        {options}
        <div className="inputFilterForm__filterValueWrapper">
          <input
            className="inputFilterForm__enteredValue"
            onChange={this.onKeyUp}
            value={this.state.inputValue}
            type="text"
          />
        </div>
        <div className="filterForm__buttons">
          <PrimaryButton
            disabled={disableInputField}
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
