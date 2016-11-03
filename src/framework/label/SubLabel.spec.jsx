
import { TestCaseFactory } from 'react-test-kit';
import SubLabel from './SubLabel.jsx';

describe('SubLabel', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is set as the sub-label\'s text', () => {
        const props = {
          children: 'Sub-label text',
        };
        const testCase = TestCaseFactory.create(SubLabel, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });
  });
});
