
import { TestCaseFactory } from 'react-test-kit';
import AppTitle from './AppTitle.jsx';

describe('AppTitle', () => {
  describe('Props', () => {
    describe('text', () => {
      it('is rendered', () => {
        const props = {
          text: 'Test',
        };

        const testCase = TestCaseFactory.createFromFunction(AppTitle, props);

        expect(testCase.dom.textContent).toBe(props.text);
      });
    });
  });
});
