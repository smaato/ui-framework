
import React, {
  Component,
  PropTypes,
} from 'react';

import FilterOption from '../../services/filter/FilterOption';
import ConditionChecker from '../../services/filter/ConditionChecker';

export default class MultipleSelectFilterForm extends Component {

  constructor(props) {
    super(props);

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onClickAddButton = this.onClickAddButton.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);

    this.state = {
      selectedOptions: Array.apply(false, props.filterOption.options),
    };

    this.props.filterOption.options.forEach((optionName) => {
      this.state.selectedOptions[optionName] = false;
    });
  }

  onClickAddButton() {
    const selectedOptionNames = this.props.filterOption.options.filter(
      (value, index) => !this.state.selectedOptions[index]
    );
    const conditionChecker = new ConditionChecker(
      this.props.filterOption,
      selectedOptionNames
    );
    this.props.onAddConditionChecker(conditionChecker);
  }

  onKeyUp(event) {
    if (event.key !== 'Enter') return;
    this.onClickAddButton();
  }

  onCheckboxChange(index) {
    const selectedOptions = Object.assign({}, this.state.selectedOptions);
    selectedOptions[index] = !selectedOptions[index];
    this.setState({
      selectedOptions,
    });
  }

  render() {
    const options = this.props.filterOption.options.map((option, index) => (
      <div className="multipleSelectFilterForm__checkbox" key={index}>
        <input
          type="checkbox"
          name="option_checkbox"
          key={index}
          onChange={() => this.onCheckboxChange(index)}
        />
        {option}
      </div>
    ));

    return (
      <div className="filterForm multipleSelectFilterForm">
        {options}
        <div className="filterForm__buttons">
          <button
            onClick={this.onClickAddButton}
            className="button button--primary"
          >
            Update Results
          </button>
        </div>
      </div>
    );
  }
}

MultipleSelectFilterForm.propTypes = {
  filterOption: PropTypes.instanceOf(FilterOption),
  onAddConditionChecker: PropTypes.func.isRequired,
};
