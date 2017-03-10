
import { TestCaseFactory } from 'react-test-kit';
import FilterOptionList from './FilterOptionList.jsx';
import {
  FilterOption,
} from '../../../services';

describe('FilterOptionList', () => {
  describe('Props', () => {
    describe('filterOptions', () => {
      it('are iterated over', () => {
        const props = {
          filterOptions: [
            new FilterOption({ comparisonType: '' }),
          ],
          onSelectFilterOption: () => undefined,
        };

        const iterationSpy = spyOn(props.filterOptions, 'map');
        expect(iterationSpy).not.toHaveBeenCalled();
        TestCaseFactory.create(FilterOptionList, props);
        expect(iterationSpy).toHaveBeenCalled();
      });

      describe('name', () => {
        it('is rendered', () => {
          const filterOption = new FilterOption({
            name: 'testFilterOption',
          });

          const props = {
            filterOptions: [
              filterOption,
            ],
            onSelectFilterOption: () => undefined,
          };

          const testCase = TestCaseFactory.create(FilterOptionList, props);

          const items = testCase.find('.filterOptionListItem');
          expect(items.length).toBe(1);
          expect(items[0].textContent).toContain(filterOption.name);
        });
      });
    });

    describe('onSelectFilterOption', () => {
      it(
        'is called and receives filterOption when an item is clicked',
        () => {
          const filterOption = new FilterOption({
            name: 'testFilterOption',
            comparisonType: 'testComparisonType',
          });

          const props = {
            filterOptions: [filterOption],
            onSelectFilterOption: jasmine.createSpy('onSelectFilterOption'),
          };

          const testCase = TestCaseFactory.create(FilterOptionList, props);

          expect(props.onSelectFilterOption).not.toHaveBeenCalled();
          const item = testCase.first('.filterOptionListItem');
          testCase.trigger('click', item);
          expect(props.onSelectFilterOption).toHaveBeenCalledWith(filterOption);
        }
      );
    });
  });
});
