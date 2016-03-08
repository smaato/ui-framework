
import { TestCaseFactory } from 'react-test-kit';
import FiltersControl from './FiltersControl.jsx';
import {
  ConditionChecker,
} from '../services';
import TestUtils from '../../services/TestUtils';

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
        TestCaseFactory.createFromClass(FiltersControl, props);
        expect(iterationSpy).toHaveBeenCalled();
      });
    });

    describe('onRemoveConditionChecker', () => {
      it(TestUtils.cleanString(
        `is passed to ConditionCheckerList and called with a conditionChecker
        when a remove button is clicked`
      ), () => {
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

        const testCase =
          TestCaseFactory.createFromClass(FiltersControl, props);

        const removeButton =
          testCase.first('.conditionCheckerListItem__removeButton');

        expect(props.onRemoveConditionChecker).not.toHaveBeenCalled();
        testCase.trigger('click', removeButton);
        expect(props.onRemoveConditionChecker).toHaveBeenCalledWith(
          props.conditionCheckers[0],
          jasmine.any(Object), // SyntheticEvent
          jasmine.any(String) // React ID
        );
      });
    });
  });
});
