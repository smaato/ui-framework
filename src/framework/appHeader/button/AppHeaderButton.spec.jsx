
import { TestCaseFactory } from 'react-test-kit';
import AppHeaderButton from './AppHeaderButton.jsx';

describe('AppHeaderButton', () => {
  describe('DOM structure', () => {
    it('has the appropriate class', () => {
      const testCase = TestCaseFactory.create(AppHeaderButton);
      expect(testCase.dom.getAttribute('class')).toContain('appHeaderButton');
    });

    it('is a Button', () => {
      const testCase =
        TestCaseFactory.create(AppHeaderButton);
      expect(testCase.dom.className).toContain('button');
    });
  });

  describe('Props', () => {
    describe('classes', () => {
      it('are added to the element', () => {
        const props = {
          classes: 'test-class',
        };
        const testCase = TestCaseFactory.create(
          AppHeaderButton,
          props
        );
        expect(testCase.dom.getAttribute('class')).toContain(props.classes);
      });
    });
  });
});
