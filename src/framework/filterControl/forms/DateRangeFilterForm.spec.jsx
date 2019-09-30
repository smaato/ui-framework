
import { TestCaseFactory } from 'react-test-kit';
import DateRangeFilterForm from './DateRangeFilterForm.jsx';
import {
  Filter,
  FilterOption,
} from '../../services';
import ComparisonTypes from '../../services/filter/ComparisonTypes.js';

describe('DateRangeFilterForm', () => {
  const filterOption = new FilterOption({
    name: 'testFilterOption',
    comparisonType: ComparisonTypes.DATE_RANGE,
  });

  describe('initial state', () => {
    it('renders a button', () => {
      const props = {
        filterOption,
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(DateRangeFilterForm, props);

      expect(testCase.find('.rdr-DateRange')).toBeDefined();
    });
  });

  describe('Props', () => {
    describe('onAddFilter', () => {
      it('is called when "Update Results" button is clicked', () => {
        const props = {
          filterOption,
          onAddFilter: jasmine.createSpy('onAddFilter'),
        };

        const testCase =
          TestCaseFactory.create(DateRangeFilterForm, props);

        expect(props.onAddFilter).not.toHaveBeenCalled();
        testCase.trigger('click', testCase.find('.rdr-Day')[20]);
        testCase.trigger('click', testCase.find('.rdr-Day')[25]);
        testCase.trigger('click', testCase.find('.button--primary')[0]);
        expect(props.onAddFilter).toHaveBeenCalled();

        const filter = props.onAddFilter.calls.argsFor(0)[0];
        expect(filter instanceof Filter).toBe(true);

        expect(filter.filterOption).toBe(props.filterOption);
        expect(filter.comparisonValue.startDate).not.toBeNull();
        expect(filter.comparisonValue.endDate).not.toBeNull();
      });
    });
  });
});
