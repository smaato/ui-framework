
import { TestCaseFactory } from 'react-test-kit';
import FilterControl from './FilterControl.jsx';
import {
  Filter,
} from '../services';

describe('FilterControl', () => {
  describe('Props', () => {
    describe('onRemoveSelectedFilter', () => {
      it(
        'is passed to FilterList and called with a filter when a remove ' +
        'button is clicked',
        () => {
          const props = {
            filters: [
              new Filter({}),
            ],
            filterOptions: [],
            onAddFilter: () => undefined,
            onRemoveSelectedFilter: jasmine.createSpy(
              'onRemoveSelectedFilter'
            ),
          };

          const testCase = TestCaseFactory.create(FilterControl, props);

          const removeButton = testCase.first(
            '.selectedFilterListItem__removeButtonContainer .cross'
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
          filters: [
            new Filter({}),
          ],
          filterOptions: [],
          onAddFilter: () => undefined,
          onRemoveSelectedFilter: () => undefined,
        };

        const iterationSpy = spyOn(props.filters, 'map');

        expect(iterationSpy).not.toHaveBeenCalled();
        TestCaseFactory.create(FilterControl, props);
        expect(iterationSpy).toHaveBeenCalled();
      });
    });
  });
});
