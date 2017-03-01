
import { TestCaseFactory } from 'react-test-kit';
import SelectedFilterList from './SelectedFilterList.jsx';
import {
  Filter,
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
            '.selectedFilterListItem__removeButtonContainer .cross'
          );

          expect(props.onRemoveSelectedFilter).not.toHaveBeenCalled();
          testCase.trigger('click', removeButton);
          expect(props.onRemoveSelectedFilter).toHaveBeenCalled();
        }
      );
    });
  });
});
