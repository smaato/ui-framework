
import { TestCaseFactory } from 'react-test-kit';
import InputFilterForm from './InputFilterForm.jsx';
import {
  Filter,
  FilterOption,
} from '../../services';

describe('InputFilterForm', () => {
  describe('Props', () => {
    describe('onAddFilter', () => {
      function clickAddButton(testCase) {
        testCase.trigger('click', testCase.find('button')[0]);
      }

      it(
        'isn\'t called when the add button is clicked and the input is empty',
        () => {
          const props = {
            filterOption: new FilterOption({
              comparisonType: 'testComparisonType',
            }),
            onAddFilter: jasmine.createSpy('onAddFilter'),
          };

          const testCase =
            TestCaseFactory.create(InputFilterForm, props);

          expect(props.onAddFilter).not.toHaveBeenCalled();
          clickAddButton(testCase);
          expect(props.onAddFilter).not.toHaveBeenCalled();
        }
      );

      it(
        'isn\'t called when the Enter key is hit and the input is empty',
        () => {
          const props = {
            filterOption: new FilterOption({
              comparisonType: 'testComparisonType',
            }),
            onAddFilter: jasmine.createSpy('onAddFilter'),
          };

          const testCase =
            TestCaseFactory.create(InputFilterForm, props);

          expect(props.onAddFilter).not.toHaveBeenCalled();
          testCase.trigger('keyUp', testCase.first('input'), { key: 'Enter' });
          expect(props.onAddFilter).not.toHaveBeenCalled();
        }
      );

      it(
        'isn\'t called when a non-Enter key is hit and the input isn\'t empty',
        () => {
          const props = {
            filterOption: new FilterOption({
              comparisonType: 'testComparisonType',
            }),
            onAddFilter: jasmine.createSpy('onAddFilter'),
          };

          const testCase =
            TestCaseFactory.create(InputFilterForm, props);

          testCase.first('input').value = 'inputValue';

          expect(props.onAddFilter).not.toHaveBeenCalled();
          testCase.trigger('keyUp', testCase.first('input'), { key: '' });
          expect(props.onAddFilter).not.toHaveBeenCalled();
        }
      );

      it(
        'is called when the add button is clicked and the input isn\'t ' +
        'empty, and receives a filter',
        () => {
          const props = {
            filterOption: new FilterOption({
              comparisonType: 'testComparisonType',
            }),
            onAddFilter: jasmine.createSpy('onAddFilter'),
          };

          const testCase =
            TestCaseFactory.create(InputFilterForm, props);

          testCase.first('input').value = 'inputValue';

          expect(props.onAddFilter).not.toHaveBeenCalled();
          clickAddButton(testCase);
          expect(props.onAddFilter).toHaveBeenCalled();
        }
      );

      it(
        'is called when the Enter key is hit and the input isn\'t empty',
        () => {
          const props = {
            filterOption: new FilterOption({
              comparisonType: 'testComparisonType',
            }),
            onAddFilter: jasmine.createSpy('onAddFilter'),
          };

          const testCase =
            TestCaseFactory.create(InputFilterForm, props);

          testCase.first('input').value = 'inputValue';

          expect(props.onAddFilter).not.toHaveBeenCalled();
          testCase.trigger('keyUp', testCase.first('input'), { key: 'Enter' });
          expect(props.onAddFilter).toHaveBeenCalled();
        }
      );

      it('receives a filter when it\'s called', () => {
        const props = {
          filterOption: new FilterOption({
            comparisonType: 'testComparisonType',
          }),
          onAddFilter: jasmine.createSpy('onAddFilter'),
        };

        const testCase =
          TestCaseFactory.create(InputFilterForm, props);

        testCase.first('input').value = 'inputValue';
        clickAddButton(testCase);

        const filter = props.onAddFilter.calls.argsFor(0)[0];
        expect(filter instanceof Filter).toBe(true);
        expect(filter instanceof Filter).toBe(true);

        // Assert that filter is built with info from the props.
        expect(filter.filterOption).toBe(props.filterOption);
        expect(filter.comparisonValue).toBe(
          testCase.first('input').value
        );
      });
    });
  });
});
