
import { TestCaseFactory } from 'react-test-kit';
import BasicButton from './BasicButton.jsx';

describe('BasicButton', () => {
  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.createFromFunction(BasicButton);
      expect(testCase.dom.getAttribute('class')).toContain('button--basic');
    });
  });

  describe('Props', () => {
    describe('classes', () => {
      it('are added to the element', () => {
        const props = {
          className: 'testClass',
        };
        const testCase = TestCaseFactory.createFromFunction(BasicButton, props);
        expect(testCase.dom.className).toContain(props.className);
      });
    });
  });
});
