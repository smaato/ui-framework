
import { TestCaseFactory } from 'react-test-kit';

import Dropdown from './Dropdown.jsx';
import DropdownGroup from './DropdownGroup.jsx';

describe('DropdownGroup', () => {
  const requiredProps = {
    options: [['blue', 'pink'], ['black', 'white']],
    optionsClass: ['', 'dropdownClass'],
    labelProvider: () => undefined,
  };

  describe('DOM structure', () => {
    it('is a Dropdown', () => {
      const props = Object.assign({}, requiredProps);
      const testCase = TestCaseFactory.create(DropdownGroup, props);
      expect(testCase.findComponents(Dropdown)).toBeDefined();
    });
  });
});
