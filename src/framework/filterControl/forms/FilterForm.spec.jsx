
import { TestCaseFactory } from 'react-test-kit';
import {
  ComparisonTypes,
  FilterOption,
} from '../../services';

import SingleSelectFilterForm
from './SingleSelectFilterForm.jsx';
import FilterForm from './FilterForm.jsx';
import MultipleSelectFilterForm from './MultipleSelectFilterForm.jsx';

describe('FilterForm', () => {
  describe('render for', () => {
    it('"contains" comparision', () => {
      const props = {
        comparisonType: ComparisonTypes.CONTAINS,
        filterOption: new FilterOption({}),
        onAddConditionChecker: () => undefined,
      };

      const testCase =
        TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(SingleSelectFilterForm));

      const checkerFormProps =
        testCase.firstComponent(SingleSelectFilterForm).props;
      expect(checkerFormProps.comparisonType).toBe(ComparisonTypes.CONTAINS);
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddConditionChecker).toBe(
        props.onAddConditionChecker);
    });

    it('"max" comparision', () => {
      const props = {
        comparisonType: ComparisonTypes.MAX,
        filterOption: new FilterOption({}),
        onAddConditionChecker: () => undefined,
      };

      const testCase =
        TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(SingleSelectFilterForm));

      const checkerFormProps =
        testCase.firstComponent(SingleSelectFilterForm).props;
      expect(checkerFormProps.comparisonType).toBe(ComparisonTypes.MAX);
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddConditionChecker).toBe(
        props.onAddConditionChecker);
    });

    it('"min" comparision', () => {
      const props = {
        comparisonType: ComparisonTypes.MIN,
        filterOption: new FilterOption({}),
        onAddConditionChecker: () => undefined,
      };

      const testCase =
        TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(SingleSelectFilterForm));

      const checkerFormProps =
        testCase.firstComponent(SingleSelectFilterForm).props;
      expect(checkerFormProps.comparisonType).toBe(ComparisonTypes.MIN);
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddConditionChecker).toBe(
        props.onAddConditionChecker);
    });

    it('"one of" comparision', () => {
      const props = {
        comparisonType: ComparisonTypes.ONE_OF,
        filterOption: new FilterOption({
          comparisonParameters: {
            oneOfOptions: [],
          },
        }),
        onAddConditionChecker: () => undefined,
      };

      const testCase =
        TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(MultipleSelectFilterForm));

      const checkerFormProps =
        testCase.firstComponent(MultipleSelectFilterForm).props;
      expect(checkerFormProps.comparisonType).toBe(ComparisonTypes.ONE_OF);
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddConditionChecker).toBe(
        props.onAddConditionChecker);
    });
  });
});
