
import { TestCaseFactory } from 'react-test-kit';
import Dropdown from './Dropdown.jsx';
import BaseDropdown from '../baseDropdown/BaseDropdown.jsx';

describe('Dropdown', () => {
  const requiredProps = {
    onSelect: () => undefined,
    labelProvider: () => undefined,
    optionLabelProvider: () => undefined,
  };

  describe('DOM structure', () => {
    it('is a BaseDropdown', () => {
      const props = Object.assign({}, requiredProps);
      const testCase = TestCaseFactory.create(Dropdown, props);
      expect(testCase.findComponents(BaseDropdown)).toBeDefined();
    });
  });
});
