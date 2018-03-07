
import { TestCaseFactory } from 'react-test-kit';

import Dropdown from './Dropdown.jsx';
import DropdownGroup from './DropdownGroup.jsx';

describe('DropdownGroup', () => {
  const requiredProps = {
    labelProvider: () => undefined,
    options: [['blue', 'pink'], ['black', 'white']],
    optionGroupClasses: ['', 'dropdownClass'],
  };

  describe('DOM structure', () => {
    it('is a Dropdown', () => {
      const props = Object.assign({}, requiredProps);
      const testCase = TestCaseFactory.create(DropdownGroup, props);
      expect(testCase.firstComponent(Dropdown)).toBeDefined();
    });
  });
});
