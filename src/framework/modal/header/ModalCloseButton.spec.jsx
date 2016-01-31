
import { TestCaseFactory } from 'react-test-kit';
import ModalCloseButton from './ModalCloseButton.jsx';

describe('ModalCloseButton', () => {
  describe('Props', () => {
    describe('onClick', () => {
      let onClick;

      beforeEach(() => {
        onClick = jasmine.createSpy('onClick');

        const testCase =
          TestCaseFactory.createFromFunction(ModalCloseButton, {onClick});

        testCase.trigger('click');
      });

      it('is called once', () => {
        expect(onClick.calls.count()).toEqual(1);
      });

      it('is called with event object as an argument', () => {
        expect(onClick).toHaveBeenCalledWith(
          jasmine.any(Object), // SyntheticEvent
          jasmine.any(String) // Virtual DOM's 'data-reactid' attribute
        );
      });
    });
  });
});
