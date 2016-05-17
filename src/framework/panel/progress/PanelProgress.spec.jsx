
import { TestCaseFactory } from 'react-test-kit';
import PanelProgress from './PanelProgress.jsx';

describe('PanelProgress', () => {
  describe('DOM structure', () => {
    it('contains a progress element', () => {
      const testCase = TestCaseFactory.create(PanelProgress);
      expect(testCase.find('.progress').length).toBe(1);
    });
  });
});
