
import { TestCaseFactory } from 'react-test-kit';
import ConditionCheckerList from './ConditionCheckerList.jsx';
import {
  ConditionChecker,
} from '../../services';
import TestUtils from '../../../services/TestUtils';

describe('ConditionCheckerList', () => {
  describe('Props', () => {
    describe('conditionCheckers', () => {
      it('are iterated over', () => {
        const props = {
          conditionCheckers: [
            new ConditionChecker({}),
          ],
          onRemoveConditionChecker: () => undefined,
        };

        const iterationSpy = spyOn(props.conditionCheckers, 'map');
        expect(iterationSpy).not.toHaveBeenCalled();
        TestCaseFactory.create(ConditionCheckerList, props);
        expect(iterationSpy).toHaveBeenCalled();
      });
    });

    describe('onRemoveConditionChecker', () => {
      it(TestUtils.cleanString(
        `is called and receives conditionChecker when a remove button
        is clicked`
      ), () => {
        const props = {
          conditionCheckers: [
            new ConditionChecker({}),
          ],
          onRemoveConditionChecker: jasmine.createSpy(
            'onRemoveConditionChecker'
          ),
        };

        const testCase =
          TestCaseFactory.create(ConditionCheckerList, props);

        const removeButton =
          testCase.first('.conditionCheckerListItem__removeButton');

        expect(props.onRemoveConditionChecker).not.toHaveBeenCalled();
        testCase.trigger('click', removeButton);
        expect(props.onRemoveConditionChecker).toHaveBeenCalled();
      });
    });
  });
});
