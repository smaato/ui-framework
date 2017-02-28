
import { TestCaseFactory } from 'react-test-kit';
import SelectedFilterList from './SelectedFilterList.jsx';
import {
  ConditionChecker,
} from '../../services';

describe('SelectedFilterList', () => {
  describe('Props', () => {
    describe('conditionCheckers', () => {
      it('are iterated over', () => {
        const props = {
          conditionCheckers: [
            new ConditionChecker({}),
          ],
          onRemoveSelectedFilter: () => undefined,
        };

        const iterationSpy = spyOn(props.conditionCheckers, 'map');
        expect(iterationSpy).not.toHaveBeenCalled();
        TestCaseFactory.create(SelectedFilterList, props);
        expect(iterationSpy).toHaveBeenCalled();
      });
    });

    describe('onRemoveSelectedFilter', () => {
      it(
        'is called and receives conditionChecker when a remove button is ' +
        'clicked',
        () => {
          const props = {
            conditionCheckers: [
              new ConditionChecker({}),
            ],
            onRemoveSelectedFilter: jasmine.createSpy(
              'onRemoveSelectedFilter'
            ),
          };

          const testCase = TestCaseFactory.create(SelectedFilterList, props);

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
