
import { TestCaseFactory } from 'react-test-kit';
import DropdownOption from './DropdownOption.jsx';
import BaseDropdownOption from '../base/dropdown/BaseDropdownOption.jsx';

describe('DropdownOption', () => {
  describe('DOM structure', () => {
    it('is a BaseDropdownOption', () => {
      const testCase = TestCaseFactory.create(DropdownOption);
      expect(testCase.findComponents(BaseDropdownOption)).toBeDefined();
    });
  });
});
