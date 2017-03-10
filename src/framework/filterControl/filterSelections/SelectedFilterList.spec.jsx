
import { TestCaseFactory } from 'react-test-kit';
import SelectedFilterList from './SelectedFilterList.jsx';
import {
  Filter,
  FilterOption,
} from '../../services';

describe('SelectedFilterList', () => {
  describe('Props', () => {
    describe('selectedFilters', () => {
      it('are iterated over', () => {
        const props = {
          onRemoveSelectedFilter: () => undefined,
          selectedFilters: [
            new Filter({}),
          ],
        };

        const iterationSpy = spyOn(props.selectedFilters, 'map');
        expect(iterationSpy).not.toHaveBeenCalled();
        TestCaseFactory.create(SelectedFilterList, props);
        expect(iterationSpy).toHaveBeenCalled();
      });
    });
    describe('onRemoveSelectedFilter', () => {
      it(
        'is called and receives filter when a remove button is ' +
        'clicked',
        () => {
          const props = {
            onRemoveSelectedFilter: jasmine.createSpy(
              'onRemoveSelectedFilter'
            ),
            selectedFilters: [
              new Filter({}),
            ],
          };

          const testCase = TestCaseFactory.create(SelectedFilterList, props);

          const removeButton = testCase.first(
            '.selectedFilterListItem__removeButton'
          );

          expect(props.onRemoveSelectedFilter).not.toHaveBeenCalled();
          testCase.trigger('click', removeButton);
          expect(props.onRemoveSelectedFilter).toHaveBeenCalled();
        }
      );
    });
  });

  describe('render', () => {
    const filter = new Filter(
      new FilterOption({
        comparisonType: 'comparison type',
        name: 'filter name',
      }),
      'comparison value'
    );
    const props = {
      onRemoveSelectedFilter: () => undefined,
      selectedFilters: [filter],
    };

    it('shows filter name', () => {
      const testCase = TestCaseFactory.create(SelectedFilterList, props);

      expect(
        testCase.first('.selectedFilterListItem__name').textContent
      ).toContain(filter.filterOption.name);
    });

    it('shows humanized comparison value', () => {
      const humanizeComparisonValueSpy = spyOn(
        filter, 'humanizeComparisonValue'
      ).and.returnValue('humanized comparison value');

      expect(humanizeComparisonValueSpy).not.toHaveBeenCalled();
      const testCase = TestCaseFactory.create(SelectedFilterList, props);
      expect(humanizeComparisonValueSpy).toHaveBeenCalled();

      expect(
        testCase.first('.selectedFilterListItem__label').textContent
      ).toContain('humanized comparison value');
    });
  });
});
