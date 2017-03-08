
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
        'is passed to FilterList and called with a filter when a remove ' +
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
            '.selectedFilterListItem__removeButton'
          );

          expect(props.onRemoveSelectedFilter).not.toHaveBeenCalled();
          testCase.trigger('click', removeButton);
          expect(props.onRemoveSelectedFilter).toHaveBeenCalled();
        }
      );
    });

    describe('selectedFilters', () => {
      it('are passed to FilterList and iterated over', () => {
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

  describe('add button', () => {
    it('is hidden if the number of selected filters equals' +
       'the number of filterOptions', () => {
      const props = {
        filterOptions: [],
        onAddFilter: () => undefined,
        onRemoveSelectedFilter: () => undefined,
        selectedFilters: [],
      };

      const filterControl = TestCaseFactory.create(FilterControl, props);
      expect(
        filterControl.find('.filterDropdownButton__addButton').length
      ).toBe(0);
    });

    it('is shown if the number of selected filters is less' +
       'than the number of filterOptions', () => {
      const props = {
        filterOptions: [new FilterOption({})],
        onAddFilter: () => undefined,
        onRemoveSelectedFilter: () => undefined,
        selectedFilters: [],
      };

      const filterControl = TestCaseFactory.create(FilterControl, props);
      expect(
        filterControl.find('.filterDropdownButton__addButton').length
      ).toBe(1);
    });
  });
});
