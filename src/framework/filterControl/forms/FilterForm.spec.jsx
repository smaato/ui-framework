
import { TestCaseFactory } from 'react-test-kit';
import {
  ComparisonTypes,
  FilterOption,
} from '../../services';

import DateRangeFilterForm from './DateRangeFilterForm.jsx';
import FilterForm from './FilterForm.jsx';
import InputFilterForm from './InputFilterForm.jsx';
import MultipleSelectFilterForm from './MultipleSelectFilterForm.jsx';

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

      expect(testCase.findComponents(InputFilterForm));

      const checkerFormProps =
        testCase.firstComponent(InputFilterForm).props;
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

      expect(testCase.findComponents(InputFilterForm));

      const checkerFormProps =
        testCase.firstComponent(InputFilterForm).props;
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

      expect(testCase.findComponents(InputFilterForm));

      const checkerFormProps =
        testCase.firstComponent(InputFilterForm).props;
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

    it('"date range" comparison', () => {
      const props = {
        filterOption: new FilterOption({
          comparisonType: ComparisonTypes.DATE_RANGE,
        }),
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(FilterForm, props);

      expect(testCase.findComponents(DateRangeFilterForm));

      const checkerFormProps =
        testCase.firstComponent(DateRangeFilterForm).props;
      expect(checkerFormProps.filterOption).toBe(props.filterOption);
      expect(checkerFormProps.onAddFilter).toBe(props.onAddFilter);
    });
  });
});
