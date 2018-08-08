
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import {
  ComparisonTypes,
  FilterOption,
} from '../../services';

import InputFilterForm from './InputFilterForm.jsx';
import MultipleSelectFilterForm from './MultipleSelectFilterForm.jsx';

export default class FilterForm extends Component {

  constructor(props) {
    super(props);

    const COMPARISON_TYPE_TO_FORM_MAP = {
      [ComparisonTypes.CONTAINS]: InputFilterForm,
      [ComparisonTypes.MAX]: InputFilterForm,
      [ComparisonTypes.MIN]: InputFilterForm,
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
    PropTypes.string, PropTypes.number, PropTypes.array,
  ]),
  filterOption: PropTypes.instanceOf(FilterOption),
  onAddFilter: PropTypes.func.isRequired,
};
