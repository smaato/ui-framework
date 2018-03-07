
import { TestCaseFactory } from 'react-test-kit';
import AlertButton from './AlertButton.jsx';

describe('AlertButton', () => {
  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.create(AlertButton);
      expect(testCase.dom.getAttribute('class')).toContain('button--alert');
    });
  });

  describe('Props', () => {
    describe('classes', () => {
      it('are added to the element', () => {
        const classes = 'test-class';
        const props = {
          classes,
        };
        const testCase = TestCaseFactory.create(
          AlertButton,
          props
        );
        expect(testCase.dom.getAttribute('class')).toContain(classes);
      });
    });
  });
});
