
import { TestCaseFactory } from 'react-test-kit';
import GroupedButton from './GroupedButton.jsx';

describe('GroupedButton', () => {
  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.createFromFunction(GroupedButton);
      expect(testCase.dom.getAttribute('class')).toContain('button--grouped');
    });
  });

  describe('Props', () => {
    describe('classes', () => {
      it('are added to the element', () => {
        const props = {
          classes: 'testClass',
        };
        const testCase =
          TestCaseFactory.createFromFunction(GroupedButton, props);
        expect(testCase.dom.className).toContain(props.classes);
      });
    });
  });
});
