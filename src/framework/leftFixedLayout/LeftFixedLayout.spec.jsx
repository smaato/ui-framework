
import { TestCaseFactory } from 'react-test-kit';
import LeftFixedLayout from './LeftFixedLayout.jsx';

describe('LeftFixedLayout', () => {
  describe('Props', () => {
    describe('left', () => {
      it('is rendered', () => {
        const props = {
          left: 'test',
        };

        const testCase = TestCaseFactory.create(LeftFixedLayout, props);
        expect(testCase.dom.textContent).toBe(props.left);
      });
    });

    describe('right', () => {
      it('is rendered', () => {
        const props = {
          right: 'test',
        };

        const testCase = TestCaseFactory.create(LeftFixedLayout, props);
        expect(testCase.dom.textContent).toBe(props.right);
      });
    });
  });
});
