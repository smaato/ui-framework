
import { TestCaseFactory } from 'react-test-kit';
import SingleSelectFilterForm from './SingleSelectFilterForm.jsx';
import {
  ConditionChecker,
  FilterOption,
} from '../../services';

describe('SingleSelectFilterForm', () => {
  describe('Props', () => {
    describe('filterOption', () => {
      it('name is rendered', () => {
        const props = {
          filterOption: new FilterOption({ name: 'testFilterOption' }),
          comparisonType: '',
          onAddConditionChecker: () => undefined,
        };

        const testCase =
          TestCaseFactory.create(SingleSelectFilterForm, props);

        expect(testCase.first('.singleSelectionForm__filterName').textContent)
          .toContain(props.filterOption.name);
      });
    });

    describe('comparisonType', () => {
      it('is rendered', () => {
        const props = {
          filterOption: new FilterOption({}),
          comparisonType: 'testComparisonType',
          onAddConditionChecker: () => undefined,
        };

        const testCase =
          TestCaseFactory.create(SingleSelectFilterForm, props);

        expect(testCase.first('.singleSelectionForm__filterName').textContent)
          .toContain(props.comparisonType);
      });
    });

    describe('onAddConditionChecker', () => {
      function clickAddButton(testCase) {
        testCase.trigger('click', testCase.find('button')[0]);
      }

      it(
        'isn\'t called when the add button is clicked and the input is empty',
        () => {
          const props = {
            filterOption: new FilterOption({}),
            comparisonType: 'testComparisonType',
            onAddConditionChecker: jasmine.createSpy('onAddConditionChecker'),
          };

          const testCase =
            TestCaseFactory.create(SingleSelectFilterForm, props);

          expect(props.onAddConditionChecker).not.toHaveBeenCalled();
          clickAddButton(testCase);
          expect(props.onAddConditionChecker).not.toHaveBeenCalled();
        }
      );

      it(
        'isn\'t called when the Enter key is hit and the input is empty',
        () => {
          const props = {
            filterOption: new FilterOption({}),
            comparisonType: 'testComparisonType',
            onAddConditionChecker: jasmine.createSpy('onAddConditionChecker'),
          };

          const testCase =
            TestCaseFactory.create(SingleSelectFilterForm, props);

          expect(props.onAddConditionChecker).not.toHaveBeenCalled();
          testCase.trigger('keyUp', testCase.first('input'), { key: 'Enter' });
          expect(props.onAddConditionChecker).not.toHaveBeenCalled();
        }
      );

      it(
        'isn\'t called when a non-Enter key is hit and the input isn\'t empty',
        () => {
          const props = {
            filterOption: new FilterOption({}),
            comparisonType: 'testComparisonType',
            onAddConditionChecker: jasmine.createSpy('onAddConditionChecker'),
          };

          const testCase =
            TestCaseFactory.create(SingleSelectFilterForm, props);

          testCase.first('input').value = 'inputValue';

          expect(props.onAddConditionChecker).not.toHaveBeenCalled();
          testCase.trigger('keyUp', testCase.first('input'), { key: '' });
          expect(props.onAddConditionChecker).not.toHaveBeenCalled();
        }
      );

      it(
        'is called when the add button is clicked and the input isn\'t ' +
        'empty, and receives a conditionChecker',
        () => {
          const props = {
            filterOption: new FilterOption({}),
            comparisonType: 'testComparisonType',
            onAddConditionChecker: jasmine.createSpy('onAddConditionChecker'),
          };

          const testCase =
            TestCaseFactory.create(SingleSelectFilterForm, props);

          testCase.first('input').value = 'inputValue';

          expect(props.onAddConditionChecker).not.toHaveBeenCalled();
          clickAddButton(testCase);
          expect(props.onAddConditionChecker).toHaveBeenCalled();
        }
      );

      it(
        'is called when the Enter key is hit and the input isn\'t empty',
        () => {
          const props = {
            filterOption: new FilterOption({}),
            comparisonType: 'testComparisonType',
            onAddConditionChecker: jasmine.createSpy('onAddConditionChecker'),
          };

          const testCase =
            TestCaseFactory.create(SingleSelectFilterForm, props);

          testCase.first('input').value = 'inputValue';

          expect(props.onAddConditionChecker).not.toHaveBeenCalled();
          testCase.trigger('keyUp', testCase.first('input'), { key: 'Enter' });
          expect(props.onAddConditionChecker).toHaveBeenCalled();
        }
      );

      it('receives a conditionChecker when it\'s called', () => {
        const props = {
          filterOption: new FilterOption({}),
          comparisonType: 'testComparisonType',
          onAddConditionChecker: jasmine.createSpy('onAddConditionChecker'),
        };

        const testCase =
          TestCaseFactory.create(SingleSelectFilterForm, props);

        testCase.first('input').value = 'inputValue';
        clickAddButton(testCase);

        const conditionChecker =
          props.onAddConditionChecker.calls.argsFor(0)[0];
        expect(conditionChecker instanceof ConditionChecker).toBe(true);

        // Assert that conditionChecker is built with info from the props.
        expect(conditionChecker.filter).toBe(props.filterOption);
        expect(conditionChecker.comparisonType).toBe(props.comparisonType);
        expect(conditionChecker.comparisonValue).toBe(
          testCase.first('input').value
        );
      });
    });
  });
});
