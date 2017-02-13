
import { TestCaseFactory } from 'react-test-kit';
import FilterOptionList from './FilterOptionList.jsx';
import {
  FilterOption,
} from '../../services';

describe('FilterOptionList', () => {
  describe('Props', () => {
    describe('filterOptions', () => {
      it('are iterated over', () => {
        const props = {
          filterOptions: [
            new FilterOption({ comparisonTypes: [] }),
          ],
          onSelectFilterOption: () => undefined,
        };

        const iterationSpy = spyOn(props.filterOptions, 'map');
        expect(iterationSpy).not.toHaveBeenCalled();
        TestCaseFactory.create(FilterOptionList, props);
        expect(iterationSpy).toHaveBeenCalled();
      });

      describe('comparisonTypes', () => {
        it('are rendered with the filterOption name', () => {
          const filterOption = new FilterOption({
            name: 'testFilterOption',
            comparisonTypes: [
              'test1',
              'test2',
            ],
          });

          const props = {
            filterOptions: [
              filterOption,
            ],
            onSelectFilterOption: () => undefined,
          };

          const testCase =
            TestCaseFactory.create(FilterOptionList, props);

          const items = testCase.find('.filterOptionListItem');
          items.forEach((item, index) => {
            expect(item.textContent).toContain(filterOption.name);
            expect(item.textContent)
              .toContain(filterOption.comparisonTypes[index]);
          });
        });
      });
    });

    describe('onSelectFilterOption', () => {
      it(
        'is called and receives filterOption and comparisonType when an item ' +
        'is clicked',
        () => {
          const filterOption = new FilterOption({
            name: 'testFilterOption',
            comparisonTypes: [
              'test1',
            ],
          });

          const props = {
            filterOptions: [
              filterOption,
            ],
            onSelectFilterOption: jasmine.createSpy('onSelectFilterOption'),
          };

          const testCase =
            TestCaseFactory.create(FilterOptionList, props);
          expect(props.onSelectFilterOption).not.toHaveBeenCalled();

          const item = testCase.first('.filterOptionListItem');
          testCase.trigger('click', item);

          expect(props.onSelectFilterOption).toHaveBeenCalledWith(
            filterOption,
            filterOption.comparisonTypes[0]
          );
        }
      );
    });
  });
});
