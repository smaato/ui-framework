
import { TestCaseFactory } from 'react-test-kit';
import MixedTypeValueFilterForm from './MixedTypeValueFilterForm.jsx';
import {
  Filter,
  FilterOption,
  OneOfOption,
} from '../../services';
import ComparisonTypes from '../../services/filter/ComparisonTypes.js';

describe('MixedTypeValueFilterForm', () => {
  const options = [
    new OneOfOption('test42'),
    new OneOfOption('test43'),
  ];
  const filterOption = new FilterOption({
    name: 'testFilterOption',
    comparisonType: ComparisonTypes.DATE_RANGE,
    comparisonParameters: {
      options,
    },
  });

  describe('initial state', () => {
    it('has options unselected', () => {
      const props = {
        filterOption,
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(MixedTypeValueFilterForm, props);

      expect(testCase.element.options)
        .toBe(filterOption.comparisonParameters.options);
      testCase.element.state.selectedOptions.forEach((value) => {
        expect(value).toBe(false);
      });
    });

    it('renders a button', () => {
      const props = {
        filterOption,
        onAddFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(MixedTypeValueFilterForm, props);

      expect(testCase.find('button')[0]).toBeDefined();
    });
  });

  describe('Props', () => {
    describe('fitler options', () => {
      it('should render the options', () => {
        const props = {
          filterOption,
          onAddFilter: () => undefined,
        };

        const testCase =
          TestCaseFactory.create(MixedTypeValueFilterForm, props);

        expect(
          testCase.dom.className
        ).toBe('filterForm filterForm--multiSelect');

        expect(
          testCase.find('.filterForm--multiSelect__checkbox').length
        ).toBe(2);

        options.forEach((option) => {
          expect(testCase.find(
            `.filterForm--multiSelect__checkbox:contains(${option.label})`
          ).length).toBe(1);
        });
      });
    });

    describe('filter input', () => {
      it('should render the input field', () => {
        const props = {
          filterOption,
          onAddFilter: () => undefined,
        };

        const testCase =
          TestCaseFactory.create(MixedTypeValueFilterForm, props);

        expect(
          testCase.find('.inputFilterForm__enteredValue').length
        ).toBe(1);
      });
    });

    describe('onAddFilter', () => {
      describe('when one discrete value is selected', () => {
        it('is called when "Update Results" button is clicked', () => {
          const props = {
            filterOption,
            onAddFilter: jasmine.createSpy('onAddFilter'),
          };
          const testCase =
            TestCaseFactory.create(MixedTypeValueFilterForm, props);

          expect(props.onAddFilter).not.toHaveBeenCalled();
          testCase.trigger('change', testCase.find('input[type=checkbox]')[0]);
          testCase.trigger('click', testCase.find('button')[0]);
          expect(props.onAddFilter).toHaveBeenCalled();

          const filter = props.onAddFilter.calls.argsFor(0)[0];
          expect(filter instanceof Filter).toBe(true);

          expect(filter.filterOption).toBe(props.filterOption);
          expect(filter.comparisonValue.discreteValues.length).toBe(1);
        });
      });
    });

    describe('when two discrete value are selected', () => {
      it('is called when "Update Results" button is clicked', () => {
        const props = {
          filterOption,
          onAddFilter: jasmine.createSpy('onAddFilter'),
        };
        const testCase =
          TestCaseFactory.create(MixedTypeValueFilterForm, props);

        expect(props.onAddFilter).not.toHaveBeenCalled();
        testCase.trigger('change', testCase.find('input[type=checkbox]')[0]);
        testCase.trigger('change', testCase.find('input[type=checkbox]')[1]);
        testCase.trigger('click', testCase.find('button')[0]);
        expect(props.onAddFilter).toHaveBeenCalled();

        const filter = props.onAddFilter.calls.argsFor(0)[0];
        expect(filter instanceof Filter).toBe(true);

        expect(filter.filterOption).toBe(props.filterOption);
        expect(filter.comparisonValue.discreteValues.length).toBe(2);
      });
    });

    describe('when two discrete values and an input value are selected', () => {
      it('is called when "Update Results" button is clicked', () => {
        const props = {
          filterOption,
          onAddFilter: jasmine.createSpy('onAddFilter'),
        };
        const testCase =
          TestCaseFactory.create(MixedTypeValueFilterForm, props);

        expect(props.onAddFilter).not.toHaveBeenCalled();

        testCase.trigger('change', testCase.find('input[type=checkbox]')[0]);
        testCase.trigger('change', testCase.find('input[type=checkbox]')[1]);
        testCase.first('.inputFilterForm__enteredValue').value = '42';
        testCase.trigger('click', testCase.find('button')[0]);

        expect(props.onAddFilter).toHaveBeenCalled();

        const filter = props.onAddFilter.calls.argsFor(0)[0];
        expect(filter instanceof Filter).toBe(true);

        expect(filter.filterOption).toBe(props.filterOption);
        expect(filter.comparisonValue.discreteValues.length).toBe(2);
        expect(filter.comparisonValue.inputValue).toBe('42');
      });
    });
  });
});
