
import { TestCaseFactory } from 'react-test-kit';
import Tooltip from './Tooltip.jsx';

describe('Tooltip', () => {
  describe('Props', () => {
    describe('childen', () => {
      it('is rendered', () => {
        const props = {
          children: 'hi',
        };

        const testCase = TestCaseFactory.create(Tooltip, props);
        expect(testCase.dom.textContent).toContain(props.children);
      });
    });
  });
});
