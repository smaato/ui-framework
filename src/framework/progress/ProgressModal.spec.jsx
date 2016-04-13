
import { TestCaseFactory } from 'react-test-kit';
import ProgressModal from './ProgressModal.jsx';

describe('ProgressModal', () => {
  describe('Props', () => {
    describe('type', () => {
      it('displays progress when PROGRESS', () => {
        const props = {
          type: ProgressModal.TYPE.PROGRESS,
        };
        const testCase = TestCaseFactory.create(ProgressModal, props);
        expect(testCase.first('.progress')).toBeDefined();
      });

      it('displays success when SUCCESS', () => {
        const props = {
          type: ProgressModal.TYPE.SUCCESS,
        };
        const testCase = TestCaseFactory.create(ProgressModal, props);
        expect(testCase.first('.progressSuccess')).toBeDefined();
      });
    });
  });
});
