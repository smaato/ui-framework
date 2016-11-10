
import { TestCaseFactory } from 'react-test-kit';
import StatusDropdownOption from './StatusDropdownOption.jsx';
import BaseDropdownOption from '../base/dropdown/BaseDropdownOption.jsx';

describe('StatusDropdownOption', () => {
  describe('DOM structure', () => {
    it('is a BaseDropdownOption', () => {
      const testCase = TestCaseFactory.create(StatusDropdownOption);
      expect(testCase.findComponents(BaseDropdownOption)).toBeDefined();
    });
  });
});
