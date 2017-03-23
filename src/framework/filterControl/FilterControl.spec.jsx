
import { TestCaseFactory } from 'react-test-kit';

import {
  Filter,
  FilterOption,
} from '../services';

import FilterControl from './FilterControl.jsx';

describe('FilterControl', () => {
  const defaultProps = {
    filterOptions: [],
    onAddFilter: () => undefined,
    onRemoveSelectedFilter: () => undefined,
    onReplaceFilter: () => undefined,
    selectedFilters: [],
  };

  describe('Props', () => {
    describe('filterOptions', () => {
      it('when empty hides the add button', () => {
        const props = Object.assign({}, defaultProps);

        const filterControl = TestCaseFactory.create(FilterControl, props);

        expect(
          filterControl.first('.filterDropdownButton__addButton')
        ).not.toBeDefined();
      });

      it('when not empty renders the add button', () => {
        const props = Object.assign({}, defaultProps, {
          filterOptions: [new FilterOption({ name: 'name' })],
        });

        const filterControl = TestCaseFactory.create(FilterControl, props);

        expect(
          filterControl.first('.filterDropdownButton__addButton')
        ).toBeDefined();
      });
    });

    describe('onRemoveSelectedFilter', () => {
      it('is passed to FilterItem', () => {
        const props = Object.assign({}, defaultProps, {
          onRemoveSelectedFilter: jasmine.createSpy('onRemoveSelectedFilter'),
          selectedFilters: [new Filter(new FilterOption({ name: 'name' }))],
        });

        const testCase = TestCaseFactory.create(FilterControl, props);
        expect(props.onRemoveSelectedFilter).not.toHaveBeenCalled();

        const removeButton = testCase.first('.filterItem__removeButton');
        testCase.trigger('click', removeButton);
        expect(props.onRemoveSelectedFilter).toHaveBeenCalled();
      });
    });

    describe('selectedFilters', () => {
      it('are iterated over', () => {
        const props = Object.assign({}, defaultProps);

        const iterationSpy =
          spyOn(props.selectedFilters, 'map').and.callThrough();

        expect(iterationSpy).not.toHaveBeenCalled();
        TestCaseFactory.create(FilterControl, props);
        expect(iterationSpy).toHaveBeenCalled();
      });
    });
  });
});
