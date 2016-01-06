
import { TestCaseFactory } from 'react-test-kit';
import CallOutButton from './CallOutButton.jsx';

describe('CallOutButton', () => {
  describe('Props', () => {
    describe('classes', () => {
      it('is rendered', () => {
        const classes = 'test-class';
        const props = {
          classes: classes,
        };
        const testCase = TestCaseFactory.createFromFunction(CallOutButton, props);
        expect(testCase.dom.getAttribute('class')).toContain(classes);
      });
    });
  });
});
