
import { TestCaseFactory } from 'react-test-kit';
import AddOnDropdownOption from './AddOnDropdownOption.jsx';
import BaseDropdownOption from '../../base/dropdown/BaseDropdownOption.jsx';

describe('AddOnDropdownOption', () => {
  describe('DOM structure', () => {
    it('is a BaseDropdownOption', () => {
      const props = {
        onClick: () => undefined,
        onMouseOver: () => undefined,
      };
      const testCase = TestCaseFactory.create(AddOnDropdownOption, props);
      expect(testCase.findComponents(BaseDropdownOption)).toBeDefined();
    });
  });
});
