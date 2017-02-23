
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ComparisonTypes,
  FilterOption,
} from '../../services.js';

import ConditionCheckerForm
from '../conditionCheckers/ConditionCheckerForm.jsx';
import MultipleSelectFilterForm from './MultipleSelectFilterForm.jsx';

export default class FilterForm extends Component {
  constructor(props) {
    super(props);
    const COMPARISON_TYPE_TO_FORM_MAP = {
      [ComparisonTypes.CONTAINS]: ConditionCheckerForm,
      [ComparisonTypes.MAX]: ConditionCheckerForm,
      [ComparisonTypes.MIN]: ConditionCheckerForm,
      [ComparisonTypes.ONE_OF]: MultipleSelectFilterForm,
    };
    this.formClass = COMPARISON_TYPE_TO_FORM_MAP[this.props.comparisonType];
  }

  render() {
    const FormClass = this.formClass;
    return (
      <FormClass
        comparisonType={this.props.comparisonType}
        filterOption={this.props.filterOption}
        onAddConditionChecker={this.props.onAddConditionChecker}
      />
    );
  }
}

FilterForm.propTypes = {
  comparisonType: PropTypes.string.isRequired,
  filterOption: PropTypes.instanceOf(FilterOption),
  onAddConditionChecker: PropTypes.func.isRequired,
};
