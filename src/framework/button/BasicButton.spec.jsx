
import { TestCaseFactory } from 'react-test-kit';
import BasicButton from './BasicButton.jsx';

describe('BasicButton', () => {
  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.create(BasicButton);
      expect(testCase.dom.getAttribute('class')).toContain('button--basic');
    });
  });

  describe('Props', () => {
    describe('classes', () => {
      it('are added to the element', () => {
        const props = {
          classes: 'testClass',
        };
        const testCase = TestCaseFactory.create(BasicButton, props);
        expect(testCase.dom.className).toContain(props.classes);
      });
    });
  });
});
