
import { TestCaseFactory } from 'react-test-kit';
import ModalConfirmationBody from './ModalConfirmationBody.jsx';

describe('ModalConfirmationBody', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered when a string', () => {
        const props = {
          children: 'testChildren',
        };
        const testCase =
          TestCaseFactory.createFromFunction(ModalConfirmationBody, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });
  });
});
