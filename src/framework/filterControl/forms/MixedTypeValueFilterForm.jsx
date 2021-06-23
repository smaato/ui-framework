
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
    this.onChange = this.onChange.bind(this);

    this.state = {
      ...this.mapComparisonValuetoState(props),
      ...this.mapOptionsToState(props),
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      ...this.mapComparisonValuetoState(this.props),
      ...this.mapOptionsToState(this.props),
    });
  }

  componentDidUpdate(prevProps) {
    if (
      !this.deepEqualsProps(prevProps.filterOption, this.props.filterOption) ||
      !this.deepEqualsProps(prevProps.comparisonValue,
        this.props.comparisonValue)
    ) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        ...this.mapComparisonValuetoState(this.props),
        ...this.mapOptionsToState(this.props),
      });
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
    const discreteValues = this.state.options.filter(
      (value, index) => this.state.selectedOptions[index]
    );

    const filter = new Filter(
      this.props.filterOption,
      new MixedTypeValueFilter(discreteValues, inputValue)
    );

    this.props.onAddFilter(filter);
  }

  onChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  mapComparisonValuetoState(props) {
    const options = props.filterOption.comparisonParameters.options;
    if (props.comparisonValue) {
      const selectedOptions = options.map(option =>
        Boolean(props.comparisonValue.discreteValues.find(
          element => element.value === option.value)
        )
      );

      return {
        inputValue: props.comparisonValue.inputValue,
        selectedOptions,
      };
    }

    return {
      inputValue: '',
      selectedOptions: (new Array(options.length)).fill(false),
    };
  }

  mapOptionsToState(props) {
    return {
      options: props.filterOption.comparisonParameters.options,
    };
  }

  deepEqualsProps(object1, object2) {
    return JSON.stringify(object1) === JSON.stringify(object2);
  }

  render() {
    const options = this.state.options.map((option, index) => (
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

    const isInputValueEmpty = !!this.state.inputValue.trim();
    const disableInputField = !this.state.selectedOptions
        .reduce((acc, option) => acc || option, isInputValueEmpty);

    return (
      <div className="filterForm filterForm--multiSelect">
        {options}
        <div className="inputFilterForm__filterValueWrapper">
          <input
            className="inputFilterForm__enteredValue"
            onChange={this.onChange}
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
  comparisonValue: PropTypes.instanceOf(MixedTypeValueFilter),
  filterOption: PropTypes.instanceOf(FilterOption),
  onAddFilter: PropTypes.func.isRequired,
};
