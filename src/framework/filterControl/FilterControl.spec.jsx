
import { TestCaseFactory } from 'react-test-kit';
import FilterControl from './FilterControl.jsx';
import {
  ConditionChecker,
} from '../services';

describe('FilterControl', () => {
  describe('Props', () => {
    describe('conditionCheckers', () => {
      it('are passed to ConditionCheckerList and iterated over', () => {
        const props = {
          conditionCheckers: [
            new ConditionChecker({}),
          ],
          filterOptions: [],
          onAddConditionChecker: () => undefined,
          onRemoveSelectedFilter: () => undefined,
        };

        const iterationSpy = spyOn(props.conditionCheckers, 'map');

        expect(iterationSpy).not.toHaveBeenCalled();
        TestCaseFactory.create(FilterControl, props);
        expect(iterationSpy).toHaveBeenCalled();
      });
    });

    describe('onRemoveSelectedFilter', () => {
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
            onRemoveSelectedFilter: jasmine.createSpy(
              'onRemoveSelectedFilter'
            ),
          };

          const testCase = TestCaseFactory.create(FilterControl, props);

          const removeButton =
            testCase.first(
              '.conditionCheckerListItem__removeButtonContainer .css-icon');

          expect(props.onRemoveSelectedFilter).not.toHaveBeenCalled();
          testCase.trigger('click', removeButton);
          expect(props.onRemoveSelectedFilter).toHaveBeenCalled();
        }
      );
    });
  });
});
