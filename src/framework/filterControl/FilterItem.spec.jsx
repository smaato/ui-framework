
import { TestCaseFactory } from 'react-test-kit';
import {
  ComparisonTypes,
  Filter,
  FilterOption,
} from '../services';

import FilterItem from './FilterItem.jsx';

describe('FilterItem', () => {
  const filterOption = new FilterOption({
    comparisonType: ComparisonTypes.CONTAINS,
    name: 'filter name',
  });
  const filter = new Filter(filterOption, 'comparison_value');

  describe('props', () => {
    describe('onRemoveSelectedFilter', () => {
      it(
        'is called and receives filter when a remove button is clicked',
        () => {
          const props = {
            filter,
            onRemoveSelectedFilter: jasmine.createSpy('onRemoveSelectedFilter'),
            onReplaceFilter: () => undefined,
          };

          const testCase = TestCaseFactory.create(FilterItem, props);
          const removeButton = testCase.first(
            '.filterItem__removeButton'
          );

          expect(props.onRemoveSelectedFilter).not.toHaveBeenCalled();
          testCase.trigger('click', removeButton);
          expect(props.onRemoveSelectedFilter).toHaveBeenCalled();
        }
      );
    });

    describe('filter', () => {
      it('name is displayed', () => {
        const props = {
          filter,
          onRemoveSelectedFilter: () => undefined,
          onReplaceFilter: () => undefined,
        };

        const testCase = TestCaseFactory.create(FilterItem, props);
        expect(
          testCase.first('.filterItem__name').textContent
        ).toContain(filterOption.name);
      });
    });
  });

  describe('on click', () => {
    const props = {
      filter,
      onRemoveSelectedFilter: () => undefined,
      onReplaceFilter: () => undefined,
    };

    it('opens a form', () => {
      const testCase = TestCaseFactory.create(FilterItem, props);
      expect(testCase.first('.filterFormDropdown')).not.toBeDefined();
      testCase.trigger('click', testCase.first('.filterItem__label'));
      expect(testCase.first('.filterFormDropdown')).toBeDefined();
    });

    it('opens a form with the current state', () => {
      const testCase = TestCaseFactory.create(FilterItem, props);
      testCase.trigger('click', testCase.first('.filterItem__label'));
      expect(testCase.first(
        `.singleSelectionForm__enteredValue[value=${filter.comparisonValue}]`
      )).toBeDefined();
    });
  });

  describe('editing', () => {
    it('calls onReplaceFilter', () => {
      const props = {
        filter,
        onRemoveSelectedFilter: () => undefined,
        onReplaceFilter: jasmine.createSpy('onReplaceFilter'),
      };

      const newComparisonValue = 'new comparison value';
      const testCase = TestCaseFactory.create(FilterItem, props);
      testCase.trigger('click', testCase.first('.filterItem__label'));

      const input = testCase.first('.singleSelectionForm__enteredValue');
      input.value = newComparisonValue;
      testCase.trigger('change', input);
      testCase.trigger('keyDown', input, {
        key: 'ENTER', keyCode: 13, which: 13,
      });

      expect(props.onReplaceFilter).not.toHaveBeenCalled();
      testCase.trigger(
        'click', testCase.first('.singleSelectionForm__buttons button')
      );
      expect(props.onReplaceFilter).toHaveBeenCalled();
    });

    it('closes form when cancelled', () => {
      const props = {
        filter,
        onRemoveSelectedFilter: () => undefined,
        onReplaceFilter: () => undefined,
      };

      const testCase = TestCaseFactory.create(FilterItem, props);
      testCase.trigger('click', testCase.first('.filterItem__label'));
      testCase.trigger(
        'click',
        testCase.first('.filterFormDropdown__form__header__closeButton')
      );
      expect(testCase.first('.filterFormDropdown')).not.toBeDefined();
    });
  });
});
