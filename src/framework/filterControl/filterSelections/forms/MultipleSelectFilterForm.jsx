
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Filter,
  ComparisonTypes,
  FilterOption,
} from '../../../services';

import CheckBox from '../../../checkBox/CheckBox.jsx';
import PrimaryButton from '../../../button/PrimaryButton.jsx';

export default class MultipleSelectFilterForm extends Component {

  constructor(props) {
    super(props);

    this.onCheckBoxClick = this.onCheckBoxClick.bind(this);
    this.onClickAddButton = this.onClickAddButton.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.options = this.props.filterOption.comparisonParameters.oneOfOptions;

    this.state = {
      selectedOptions: (new Array(this.options.length)).fill(false),
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
      ComparisonTypes.ONE_OF,
      selectedOptionNames
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
          id={index}
          key={index}
          name="option_checkbox"
          onClick={() => this.onCheckBoxClick(index)}
          type="checkbox"
        />
        {option}
      </div>
    ));

    return (
      <div className="filterForm filterForm--multiSelect">
        {options}
        <div className="filterForm__buttons">
          <PrimaryButton onClick={this.onClickAddButton}>
            Update Results
          </PrimaryButton>
        </div>
      </div>
    );
  }
}

MultipleSelectFilterForm.propTypes = {
  filterOption: PropTypes.instanceOf(FilterOption),
  onAddFilter: PropTypes.func.isRequired,
};
