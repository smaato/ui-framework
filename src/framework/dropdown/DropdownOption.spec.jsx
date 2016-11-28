
import { TestCaseFactory } from 'react-test-kit';
import DropdownOption from './DropdownOption.jsx';
import BaseDropdownOption from '../base/dropdown/BaseDropdownOption.jsx';

describe('DropdownOption', () => {
  describe('DOM structure', () => {
    it('is a BaseDropdownOption', () => {
      const props = {
        onClick: () => undefined,
        onMouseOver: () => undefined,
      };
      const testCase = TestCaseFactory.create(DropdownOption, props);
      expect(testCase.findComponents(BaseDropdownOption)).toBeDefined();
    });
  });
});
