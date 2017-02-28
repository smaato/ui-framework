
import { TestCaseFactory } from 'react-test-kit';
import MultipleSelectFilterForm from './MultipleSelectFilterForm.jsx';
import {
  ComparisonTypes,
  ConditionChecker,
  FilterOption,
} from '../../../services';

describe('MultipleSelectFilterForm', () => {
  const options = ['Active', 'Archived', 'Stopped'];
  const filterOption = new FilterOption({
    name: 'testFilterOption',
    comparisonParameters: {
      oneOfOptions: options,
    },
  });

  describe('Props', () => {
    describe('filterOption', () => {
      it('options are rendered', () => {
        const props = {
          filterOption,
          onAddConditionChecker: () => undefined,
        };

        const testCase =
          TestCaseFactory.create(MultipleSelectFilterForm, props);
        expect(testCase.dom.className).toBe(
          'filterForm filterForm--multiSelect');

        expect(
          testCase.find('.filterForm--multiSelect__checkbox').length
        ).toBe(3);

        options.forEach((option) => {
          expect(testCase.find(
            `.filterForm--multiSelect__checkbox:contains(${option})`).length
          ).toBe(1);
        });
      });
    });
    describe('onAddConditionChecker', () => {
      it('is called when "Update Results" button is clicked', () => {
        const props = {
          filterOption,
          onAddConditionChecker: jasmine.createSpy('onAddConditionChecker'),
        };

        expect(props.onAddConditionChecker).not.toHaveBeenCalled();
        const testCase =
          TestCaseFactory.create(MultipleSelectFilterForm, props);
        testCase.trigger('click', testCase.find('button')[0]);
        expect(props.onAddConditionChecker).toHaveBeenCalled();

        const conditionChecker =
          props.onAddConditionChecker.calls.argsFor(0)[0];
        expect(conditionChecker instanceof ConditionChecker).toBe(true);

        expect(conditionChecker.filter).toBe(props.filterOption);
        expect(conditionChecker.comparisonType).toBe(ComparisonTypes.ONE_OF);
        expect(conditionChecker.comparisonValue.length).toBe(0);
      });
    });
  });
  describe('initial state', () => {
    it('has options unselected', () => {
      const props = {
        filterOption,
        onAddConditionChecker: () => undefined,
      };

      const testCase =
        TestCaseFactory.create(MultipleSelectFilterForm, props);

      expect(testCase.element.options).toBe(options);
      testCase.element.state.selectedOptions.forEach((value) => {
        expect(value).toBe(false);
      });
    });
  });
  describe('selected options', () => {
    it('are changed when a checkbox is clicked', () => {
      const props = {
        filterOption,
        onAddConditionChecker: () => undefined,
      };

      const testCase =
        TestCaseFactory.create(MultipleSelectFilterForm, props);
      testCase.trigger('change', testCase.find('input[type=checkbox]')[1]);
      testCase.element.state.selectedOptions.forEach((value, index) => {
        if (index === 1) {
          expect(value).toBe(true);
        } else {
          expect(value).toBe(false);
        }
      });
    });
    it('are correctly passed to ConditionChecker', () => {
      const props = {
        filterOption,
        onAddConditionChecker: jasmine.createSpy('onAddConditionChecker'),
      };

      const testCase =
        TestCaseFactory.create(MultipleSelectFilterForm, props);
      testCase.trigger('change', testCase.find('input[type=checkbox]')[0]);
      testCase.trigger('change', testCase.find('input[type=checkbox]')[1]);
      testCase.trigger('click', testCase.find('button')[0]);

      const conditionChecker =
        props.onAddConditionChecker.calls.argsFor(0)[0];

      expect(conditionChecker.comparisonValue.length).toBe(2);
      expect(conditionChecker.comparisonValue.indexOf('Active')).not.toBe(-1);
      expect(conditionChecker.comparisonValue.indexOf('Archived')).not.toBe(-1);
    });
  });
});
