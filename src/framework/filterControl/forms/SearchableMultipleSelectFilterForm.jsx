import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Filter, FilterOption } from '../../services';

import CheckBox from '../../checkBox/CheckBox.jsx';
import PrimaryButton from '../../button/PrimaryButton.jsx';
import SearchBox from '../../searchBox/SearchBox.jsx';

export default class SearchableMultipleSelectFilterForm extends Component {

  constructor(props) {
    super(props);

    this.onCheckBoxClick = this.onCheckBoxClick.bind(this);
    this.onClickAddButton = this.onClickAddButton.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.options = props.filterOption.comparisonParameters.oneOfOptions;

    let selectedOptions;
    if (this.props.comparisonValue === undefined) {
      selectedOptions = (new Array(this.options.length)).fill(false);
    } else {
      selectedOptions = this.options.map(option =>
        Boolean(props.comparisonValue.find(
          element => element.value === option.value)
        )
      );
    }

    this.state = {
      selectedOptions,
      search: '',
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

  onSearch(str) {
    this.setState({
      search: str,
    });
  }

  render() {
    const options = this.options
    .map((option, index) => ({
      option,
      index,
    }))
    .filter((item) => {
      const label = item.option.label.toLowerCase();
      return label.indexOf(this.state.search.toLowerCase()) > -1;
    })
    .map(item => (
      <div className="filterForm--multiSelect__checkbox" key={item.index}>
        <CheckBox
          checked={this.state.selectedOptions[item.index]}
          id={item.index}
          key={item.index}
          name="option_checkbox"
          onClick={() => this.onCheckBoxClick(item.index)}
          type="checkbox"
        />
        {item.option.label}
      </div>
    ));

    return (
      <div className="filterForm filterForm--multiSelect">
        <div className={'filterForm__search'}>
          <SearchBox
            isImmediate
            onSearch={this.onSearch}
          />
        </div>
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

SearchableMultipleSelectFilterForm.propTypes = {
  comparisonValue: PropTypes.array,
  filterOption: PropTypes.instanceOf(FilterOption),
  onAddFilter: PropTypes.func.isRequired,
};
