
import { TestCaseFactory } from 'react-test-kit';
import FiltersControl from './FiltersControl.jsx';
import {
  ConditionChecker,
} from '../services';

describe('FiltersControl', () => {
  describe('Props', () => {
    describe('conditionCheckers', () => {
      it('are passed to ConditionCheckerList and iterated over', () => {
        const props = {
          conditionCheckers: [
            new ConditionChecker({}),
          ],
          filterOptions: [],
          onAddConditionChecker: () => undefined,
          onRemoveConditionChecker: () => undefined,
        };

        const iterationSpy = spyOn(props.conditionCheckers, 'map');

        expect(iterationSpy).not.toHaveBeenCalled();
        TestCaseFactory.create(FiltersControl, props);
        expect(iterationSpy).toHaveBeenCalled();
      });
    });

    describe('onRemoveConditionChecker', () => {
      it(
        'is passed to ConditionCheckerList and called with a ' +
        'conditionChecker when a remove button is clicked',
        () => {
          const props = {
            conditionCheckers: [
              new ConditionChecker({}),
            ],
            filterOptions: [],
            onAddConditionChecker: () => undefined,
            onRemoveConditionChecker: jasmine.createSpy(
              'onRemoveConditionChecker'
            ),
          };

          const testCase = TestCaseFactory.create(FiltersControl, props);

          const removeButton =
            testCase.first('.conditionCheckerListItem__removeButton');

          expect(props.onRemoveConditionChecker).not.toHaveBeenCalled();
          testCase.trigger('click', removeButton);
          expect(props.onRemoveConditionChecker).toHaveBeenCalled();
        }
      );
    });
  });
});
