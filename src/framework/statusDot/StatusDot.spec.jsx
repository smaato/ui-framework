
import { TestCaseFactory } from 'react-test-kit';
import StatusDot from './StatusDot.jsx';

describe('StatusDot', () => {
  describe('Props', () => {
    describe('status', () => {
      it('NEGATIVE applies the appropriate class', () => {
        const props = {
          status: StatusDot.STATUS.NEGATIVE,
        };
        const testCase = TestCaseFactory.create(StatusDot, props);
        expect(testCase.dom.className).toContain('statusDot--negative');
      });

      it('POSITIVE applies the appropriate class', () => {
        const props = {
          status: StatusDot.STATUS.POSITIVE,
        };
        const testCase = TestCaseFactory.create(StatusDot, props);
        expect(testCase.dom.className).toContain('statusDot--positive');
      });
    });
  });
});
