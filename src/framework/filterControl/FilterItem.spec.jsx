
import { TestCaseFactory } from 'react-test-kit';
import FilterItem from './FilterItem.jsx';
import {
  Filter,
  FilterOption,
} from '../services';

describe('FitlerItem', () => {
  describe('render', () => {
    const filter = new Filter(
      new FilterOption({
        comparisonType: 'comparison type',
        name: 'filter name',
      }),
      'comparison value'
    );
    const props = {
      filter,
      onRemoveSelectedFilter: () => undefined,
    };

    it('shows filter name', () => {
      const testCase = TestCaseFactory.create(FilterItem, props);

      expect(
        testCase.first('.filterItem__name').textContent
      ).toContain(filter.filterOption.name);
    });

    it('shows humanized comparison value', () => {
      const humanizeComparisonValueSpy = spyOn(
        filter, 'humanizeComparisonValue'
      ).and.returnValue('humanized comparison value');

      expect(humanizeComparisonValueSpy).not.toHaveBeenCalled();
      const testCase = TestCaseFactory.create(FilterItem, props);
      expect(humanizeComparisonValueSpy).toHaveBeenCalled();

      expect(
        testCase.first('.filterItem__label').textContent
      ).toContain('humanized comparison value');
    });
  });

  describe('onRemoveSelectedFilter', () => {
    it(
      'is called and receives filter when a remove button is ' +
      'clicked',
      () => {
        const props = {
          filter: new Filter({}),
          onRemoveSelectedFilter: jasmine.createSpy(
            'onRemoveSelectedFilter'
          ),
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
