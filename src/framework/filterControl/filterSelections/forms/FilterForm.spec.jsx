
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
        filterOption: new FilterOption({
          comparisonType: ComparisonTypes.CONTAINS,
        }),
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(SingleSelectFilterForm));

      const checkerFormProps =
        testCase.firstComponent(SingleSelectFilterForm).props;
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddFilter).toBe(props.onAddFilter);
    });

    it('"max" comparison', () => {
      const props = {
        filterOption: new FilterOption({
          comparisonType: ComparisonTypes.MAX,
        }),
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(SingleSelectFilterForm));

      const checkerFormProps =
        testCase.firstComponent(SingleSelectFilterForm).props;
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddFilter).toBe(props.onAddFilter);
    });

    it('"min" comparison', () => {
      const props = {
        filterOption: new FilterOption({
          comparisonType: ComparisonTypes.MIN,
        }),
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(SingleSelectFilterForm));

      const checkerFormProps =
        testCase.firstComponent(SingleSelectFilterForm).props;
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddFilter).toBe(props.onAddFilter);
    });

    it('"one of" comparison', () => {
      const props = {
        filterOption: new FilterOption({
          comparisonType: ComparisonTypes.ONE_OF,
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
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddFilter).toBe(props.onAddFilter);
    });
  });
});
