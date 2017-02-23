
import { TestCaseFactory } from 'react-test-kit';
import ConditionCheckerForm
from '../conditionCheckers/ConditionCheckerForm.jsx';
import FilterForm from './FilterForm.jsx';
import MultipleSelectFilterForm from './MultipleSelectFilterForm.jsx';
import {
  ComparisonTypes,
  FilterOption,
} from '../../services';

describe('FilterForm', () => {
  describe('render for', () => {
    it('"contains" comparision', () => {
      const props = {
        filterOption: new FilterOption({}),
        comparisonType: ComparisonTypes.CONTAINS,
        onAddConditionChecker: () => undefined,
      };

      const testCase =
        TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(ConditionCheckerForm));

      const checkerFormProps =
        testCase.firstComponent(ConditionCheckerForm).props;
      expect(checkerFormProps.comparisonType).toBe(ComparisonTypes.CONTAINS);
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddConditionChecker).toBe(
        props.onAddConditionChecker);
    });

    it('"max" comparision', () => {
      const props = {
        filterOption: new FilterOption({}),
        comparisonType: ComparisonTypes.MAX,
        onAddConditionChecker: () => undefined,
      };

      const testCase =
        TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(ConditionCheckerForm));

      const checkerFormProps =
        testCase.firstComponent(ConditionCheckerForm).props;
      expect(checkerFormProps.comparisonType).toBe(ComparisonTypes.MAX);
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddConditionChecker).toBe(
        props.onAddConditionChecker);
    });

    it('"min" comparision', () => {
      const props = {
        filterOption: new FilterOption({}),
        comparisonType: ComparisonTypes.MIN,
        onAddConditionChecker: () => undefined,
      };

      const testCase =
        TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(ConditionCheckerForm));

      const checkerFormProps =
        testCase.firstComponent(ConditionCheckerForm).props;
      expect(checkerFormProps.comparisonType).toBe(ComparisonTypes.MIN);
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddConditionChecker).toBe(
        props.onAddConditionChecker);
    });

    it('"one of" comparision', () => {
      const props = {
        filterOption: new FilterOption({
          comparisonParameters: {
            oneOfOptions: [],
          },
        }),
        comparisonType: ComparisonTypes.ONE_OF,
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
