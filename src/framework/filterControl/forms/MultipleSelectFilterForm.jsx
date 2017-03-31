
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Filter,
  FilterOption,
} from '../../services';

import CheckBox from '../../checkBox/CheckBox.jsx';
import PrimaryButton from '../../button/PrimaryButton.jsx';

export default class MultipleSelectFilterForm extends Component {

  constructor(props) {
    super(props);

    this.onCheckBoxClick = this.onCheckBoxClick.bind(this);
    this.onClickAddButton = this.onClickAddButton.bind(this);
    this.options = this.props.filterOption.comparisonParameters.oneOfOptions;

    let selectedOptions;

    if (this.props.comparisonValue === undefined) {
      selectedOptions = (new Array(this.options.length)).fill(false);
    } else {
      selectedOptions = this.options.map(option => (
        this.props.comparisonValue.indexOf(option) !== -1
      ));
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
    const selectedOptionNames = this.options.filter(
      (value, index) => this.state.selectedOptions[index]
    );
    const filter = new Filter(
      this.props.filterOption,
      selectedOptionNames
    );
    this.props.onAddFilter(filter);
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

    return (
      <div className="filterForm filterForm--multiSelect">
        {options}
        <div className="filterForm__buttons">
          <PrimaryButton
            disabled={this.state.selectedOptions.indexOf(true) === -1}
            onClick={this.onClickAddButton}
          >
            Update Results
          </PrimaryButton>
        </div>
      </div>
    );
  }
}

MultipleSelectFilterForm.propTypes = {
  comparisonValue: PropTypes.array,
  filterOption: PropTypes.instanceOf(FilterOption),
  onAddFilter: PropTypes.func.isRequired,
};
