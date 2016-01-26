
import { TestCaseFactory } from 'react-test-kit';
import GridIconEdit from './GridIconEdit.jsx';

describe('GridIconEdit', () => {
  describe('Props', () => {
    describe('onClick', () => {
      let onClick;

      beforeEach(() => {
        onClick = jasmine.createSpy('onClick');

        const testCase =
          TestCaseFactory.createFromFunction(GridIconEdit, {onClick});

        testCase.trigger('click');
      });

      it('is called once', () => {
        expect(onClick.calls.count()).toEqual(1);
      });

      it('is called with event object as an argument', () => {
        expect(onClick).toHaveBeenCalledWith(
          jasmine.any(Object), // SyntheticEvent
          jasmine.any(String) // React ID
        );
      });
    });
  });
});
