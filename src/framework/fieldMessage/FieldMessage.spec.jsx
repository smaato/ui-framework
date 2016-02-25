
import { TestCaseFactory } from 'react-test-kit';
import FieldMessage from './FieldMessage.jsx';

describe('FieldMessage', () => {
  describe('Props', () => {
    describe('message', () => {
      it('is rendered as text', () => {
        const props = {
          message: 'test',
        };
        const testCase = TestCaseFactory.create(
          FieldMessage,
          props
        );
        expect(testCase.dom.textContent).toBe(props.message);
      });
    });
  });
});
