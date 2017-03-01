
import { TestCaseFactory } from 'react-test-kit';
import {
  ComparisonTypes,
  FilterOption,
} from '../../../services';

import FilterForm from './FilterForm.jsx';
import MultipleSelectFilterForm from './MultipleSelectFilterForm.jsx';
import SingleSelectFilterForm from './SingleSelectFilterForm.jsx';

describe('FilterForm', () => {
  describe('render for', () => {
    it('"contains" comparison', () => {
      const props = {
        comparisonType: ComparisonTypes.CONTAINS,
        filterOption: new FilterOption({}),
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(SingleSelectFilterForm));

      const checkerFormProps =
        testCase.firstComponent(SingleSelectFilterForm).props;
      expect(checkerFormProps.comparisonType).toBe(ComparisonTypes.CONTAINS);
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddFilter).toBe(props.onAddFilter);
    });

    it('"max" comparison', () => {
      const props = {
        comparisonType: ComparisonTypes.MAX,
        filterOption: new FilterOption({}),
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(SingleSelectFilterForm));

      const checkerFormProps =
        testCase.firstComponent(SingleSelectFilterForm).props;
      expect(checkerFormProps.comparisonType).toBe(ComparisonTypes.MAX);
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddFilter).toBe(props.onAddFilter);
    });

    it('"min" comparison', () => {
      const props = {
        comparisonType: ComparisonTypes.MIN,
        filterOption: new FilterOption({}),
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(SingleSelectFilterForm));

      const checkerFormProps =
        testCase.firstComponent(SingleSelectFilterForm).props;
      expect(checkerFormProps.comparisonType).toBe(ComparisonTypes.MIN);
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddFilter).toBe(props.onAddFilter);
    });

    it('"one of" comparison', () => {
      const props = {
        comparisonType: ComparisonTypes.ONE_OF,
        filterOption: new FilterOption({
          comparisonParameters: {
            oneOfOptions: [],
          },
        }),
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(MultipleSelectFilterForm));

      const checkerFormProps =
        testCase.firstComponent(MultipleSelectFilterForm).props;
      expect(checkerFormProps.comparisonType).toBe(ComparisonTypes.ONE_OF);
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddFilter).toBe(props.onAddFilter);
    });
  });
});
