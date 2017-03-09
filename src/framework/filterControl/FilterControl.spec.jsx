
import { TestCaseFactory } from 'react-test-kit';
import FilterControl from './FilterControl.jsx';
import {
  Filter,
  FilterOption,
} from '../services';

describe('FilterControl', () => {
  describe('Props', () => {
    describe('onRemoveSelectedFilter', () => {
      it(
        'is passed to FilterItem and called with a filter when a remove ' +
        'button is clicked',
        () => {
          const props = {
            filterOptions: [],
            onAddFilter: () => undefined,
            onRemoveSelectedFilter: jasmine.createSpy(
              'onRemoveSelectedFilter'
            ),
            selectedFilters: [
              new Filter({}),
            ],
          };

          const testCase = TestCaseFactory.create(FilterControl, props);

          const removeButton = testCase.first(
            '.filterItem__removeButton'
          );

          expect(props.onRemoveSelectedFilter).not.toHaveBeenCalled();
          testCase.trigger('click', removeButton);
          expect(props.onRemoveSelectedFilter).toHaveBeenCalled();
        }
      );
    });

    describe('selectedFilters', () => {
      it('are iterated over', () => {
        const props = {
          filterOptions: [],
          onAddFilter: () => undefined,
          onRemoveSelectedFilter: () => undefined,
          selectedFilters: [
            new Filter({}),
          ],
        };

        const iterationSpy = spyOn(props.selectedFilters, 'map');

        expect(iterationSpy).not.toHaveBeenCalled();
        TestCaseFactory.create(FilterControl, props);
        expect(iterationSpy).toHaveBeenCalled();
      });
    });
  });

  describe('Add button', () => {
    it('is hidden if filterOptions is empty', () => {
      const props = {
        filterOptions: [],
        onAddFilter: () => undefined,
        onRemoveSelectedFilter: () => undefined,
        selectedFilters: [new Filter({})],
      };

      const filterControl = TestCaseFactory.create(FilterControl, props);
      expect(
        filterControl.first('.filterDropdownButton__addButton')
      ).not.toBeDefined();
    });

    it('is shown if filterOptions is not empty', () => {
      const props = {
        filterOptions: [new FilterOption({})],
        onAddFilter: () => undefined,
        onRemoveSelectedFilter: () => undefined,
        selectedFilters: [],
      };

      const filterControl = TestCaseFactory.create(FilterControl, props);
      expect(
        filterControl.first('.filterDropdownButton__addButton')
      ).toBeDefined();
    });
  });
});
