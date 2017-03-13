
import { TestCaseFactory } from 'react-test-kit';
import FilterControl from './FilterControl.jsx';

import {
  Filter,
  FilterOption,
} from '../services';

describe('FilterControl', () => {
  describe('Props', () => {
    describe('onRemoveSelectedFilter', () => {
      const filter = new Filter(new FilterOption({
        name: 'filter option name',
      }), undefined);

      it('is passed to FilterItem', () => {
        const props = {
          filterOptions: [],
          onAddFilter: () => undefined,
          onRemoveSelectedFilter: jasmine.createSpy(
            'onRemoveSelectedFilter'
          ),
          onReplaceFilter: () => undefined,
          selectedFilters: [filter],
        };

        const testCase = TestCaseFactory.create(FilterControl, props);
        expect(props.onRemoveSelectedFilter).not.toHaveBeenCalled();

        const removeButton = testCase.first('.filterItem__removeButton');
        testCase.trigger('click', removeButton);
        expect(props.onRemoveSelectedFilter).toHaveBeenCalled();
      });
    });

    describe('selectedFilters', () => {
      it('are iterated over', () => {
        const props = {
          filterOptions: [],
          onAddFilter: () => undefined,
          onRemoveSelectedFilter: () => undefined,
          onReplaceFilter: () => undefined,
          selectedFilters: [],
        };

        const iterationSpy = spyOn(
          props.selectedFilters, 'map'
        ).and.callThrough();

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
        onReplaceFilter: () => undefined,
        selectedFilters: [],
      };

      const filterControl = TestCaseFactory.create(FilterControl, props);
      expect(
        filterControl.first('.filterDropdownButton__addButton')
      ).not.toBeDefined();
    });

    it('is shown if filterOptions is not empty', () => {
      const filterOption = new FilterOption({
        name: 'filter option name',
      });

      const props = {
        filterOptions: [filterOption],
        onAddFilter: () => undefined,
        onReplaceFilter: () => undefined,
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
