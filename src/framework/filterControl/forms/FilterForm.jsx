
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ComparisonTypes,
  FilterOption,
} from '../../services';

import MultipleSelectFilterForm from './MultipleSelectFilterForm.jsx';
import SingleSelectFilterForm from './SingleSelectFilterForm.jsx';

export default class FilterForm extends Component {

  constructor(props) {
    super(props);

    const COMPARISON_TYPE_TO_FORM_MAP = {
      [ComparisonTypes.CONTAINS]: SingleSelectFilterForm,
      [ComparisonTypes.MAX]: SingleSelectFilterForm,
      [ComparisonTypes.MIN]: SingleSelectFilterForm,
      [ComparisonTypes.ONE_OF]: MultipleSelectFilterForm,
    };

    this.formClass =
      COMPARISON_TYPE_TO_FORM_MAP[this.props.filterOption.comparisonType];
  }

  render() {
    const FormClass = this.formClass;

    return (
      <FormClass
        comparisonValue={this.props.comparisonValue}
        filterOption={this.props.filterOption}
        onAddFilter={this.props.onAddFilter}
      />
    );
  }
}

FilterForm.propTypes = {
  comparisonValue: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number, React.PropTypes.array,
  ]),
  filterOption: PropTypes.instanceOf(FilterOption),
  onAddFilter: PropTypes.func.isRequired,
};
