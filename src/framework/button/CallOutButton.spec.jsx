
import { TestCaseFactory } from 'react-test-kit';
import CallOutButton from './CallOutButton.jsx';

describe('CallOutButton', () => {
  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.createFromFunction(CallOutButton);
      expect(testCase.dom.getAttribute('class')).toContain('button--callOut');
    });
  });

  describe('Props', () => {
    describe('classes', () => {
      it('are added to the element', () => {
        const classes = 'test-class';
        const props = {
          classes,
        };
        const testCase = TestCaseFactory.createFromFunction(
          CallOutButton,
          props
        );
        expect(testCase.dom.getAttribute('class')).toContain(classes);
      });
    });
  });
});
