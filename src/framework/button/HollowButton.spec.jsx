
import { TestCaseFactory } from 'react-test-kit';
import HollowButton from './HollowButton.jsx';

describe('HollowButton', () => {
  describe('Props', () => {
    describe('classes', () => {
      it('is rendered', () => {
        const classes = 'test-class';
        const props = {
          classes: classes,
        };
        const testCase = TestCaseFactory.createFromFunction(HollowButton, props);
        expect(testCase.dom.getAttribute('class')).toContain(classes);
      });
    });
  });
});
