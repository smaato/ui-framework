
import { TestCaseFactory } from 'react-test-kit';
import Progress from './Progress.jsx';

describe('Progress', () => {
  describe('Props', () => {
    describe('size', () => {
      describe('SMALL', () => {
        it('adds the appropriate class', () => {
          const props = {
            size: Progress.SIZE.SMALL,
          };
          const testCase = TestCaseFactory.create(Progress, props);
          expect(testCase.dom.className).toContain('progress--small');
        });
      });
    });
  });
});
