
import { TestCaseFactory } from 'react-test-kit';
import Tooltip from './Tooltip.jsx';

fdescribe('Tooltip', () => {
  describe('Props', () => {
    describe('tooltip wrapper is created', () => {
      it('children is displayed', () => {
        const props = {
          children: 'hi',
        };

        const testCase = TestCaseFactory.create(Tooltip, props);
        expect(testCase.dom.textContent).toContain('hi');
      });
    });
  });
});
