
import { TestCaseFactory } from 'react-test-kit';
import PrimaryButton from './PrimaryButton.jsx';

describe('PrimaryButton', () => {
  describe('Props', () => {
    describe('classes', () => {
      it('is rendered', () => {
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
