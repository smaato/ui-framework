
import { TestCaseFactory } from 'react-test-kit';
import StatusDropdownOption from './StatusDropdownOption.jsx';
import BaseDropdownOption from '../base/dropdown/BaseDropdownOption.jsx';

describe('StatusDropdownOption', () => {
  describe('DOM structure', () => {
    it('is a BaseDropdownOption', () => {
      const props = {
        onClick: () => undefined,
        onMouseOver: () => undefined,
      };
      const testCase = TestCaseFactory.create(StatusDropdownOption, props);
      expect(testCase.findComponents(BaseDropdownOption)).toBeDefined();
    });
  });
});
