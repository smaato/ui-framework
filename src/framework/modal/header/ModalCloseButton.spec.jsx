
import { TestCaseFactory } from 'react-test-kit';
import ModalCloseButton from './ModalCloseButton.jsx';

describe('ModalCloseButton', () => {
  describe('Props', () => {
    describe('onClick', () => {
      let onClick;

      beforeEach(() => {
        onClick = jasmine.createSpy('onClick');

        const testCase =
          TestCaseFactory.createFromFunction(ModalCloseButton, { onClick });

        testCase.trigger('click');
      });

      it('is called', () => {
        expect(onClick).toHaveBeenCalled();
      });
    });
  });
});
