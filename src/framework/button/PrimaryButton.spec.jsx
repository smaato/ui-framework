
import { TestCaseFactory } from 'react-test-kit';
import PrimaryButton from './PrimaryButton.jsx';

describe('PrimaryButton', () => {
  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.createFromFunction(PrimaryButton);
      expect(testCase.dom.getAttribute('class')).toContain('button--primary');
    });
  });

  describe('Props', () => {
    describe('classes', () => {
      it('are added to the element', () => {
        const classes = 'test-class';
        const props = {
          classes: classes,
        };
        const testCase = TestCaseFactory.createFromFunction(PrimaryButton, props);
        expect(testCase.dom.getAttribute('class')).toContain(classes);
      });
    });
  });
});
