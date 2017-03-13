
import { TestCaseFactory } from 'react-test-kit';
import FilterItem from './FilterItem.jsx';
import {
  FilterOption,
} from '../services';
import Filter from '../services/filter/Filter';

describe('FitlerItem', () => {
  const filterOption = new FilterOption({
    comparisonType: 'comparison type',
    name: 'filter name',
  });
  const filter = new Filter(filterOption);

  describe('render', () => {
    const props = {
      filter,
      onRemoveSelectedFilter: () => undefined,
      onReplaceFilter: () => undefined,
    };

    it('shows filter name', () => {
      const testCase = TestCaseFactory.create(FilterItem, props);
      expect(
        testCase.first('.filterItem__name').textContent
      ).toContain(filterOption.name);
    });
  });

  describe('onRemoveSelectedFilter', () => {
    it(
      'is called and receives filter when a remove button is ' +
      'clicked',
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
});
