
import { TestCaseFactory } from 'react-test-kit';
import HollowButton from './HollowButton.jsx';

describe('HollowButton', () => {
  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.createFromFunction(HollowButton);
      expect(testCase.dom.getAttribute('class')).toContain('button--hollow');
    });
  });

  describe('Props', () => {
    describe('classes', () => {
      it('are added to the element', () => {
        const className = 'test-class';
        const props = {
          className,
        };
        const testCase = TestCaseFactory.createFromFunction(HollowButton, props);
        expect(testCase.dom.getAttribute('class')).toContain(className);
      });
    });
  });
});
