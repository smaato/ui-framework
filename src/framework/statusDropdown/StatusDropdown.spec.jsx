
import { TestCaseFactory } from 'react-test-kit';
import StatusDropdown from './StatusDropdown.jsx';
import BaseDropdown from '../baseDropdown/BaseDropdown.jsx';

describe('StatusDropdown', () => {
  const requiredProps = {
    onSelect: () => undefined,
    labelProvider: () => undefined,
    optionLabelProvider: () => undefined,
  };

  describe('DOM structure', () => {
    it('is a BaseDropdown', () => {
      const props = Object.assign({}, requiredProps);
      const testCase = TestCaseFactory.create(StatusDropdown, props);
      expect(testCase.findComponents(BaseDropdown)).toBeDefined();
    });
  });

  describe('Props', () => {
    describe('status', () => {
      it('NEGATIVE applies the appropriate label class', () => {
        const props = Object.assign({}, requiredProps, {
          status: StatusDropdown.STATUS.NEGATIVE,
        });
        const testCase = TestCaseFactory.create(StatusDropdown, props);
        const label = testCase.first('.statusDropdownLabel');
        expect(label.className).toContain('statusDropdownLabel--negative');
      });

      it('POSITIVE applies the appropriate label class', () => {
        const props = Object.assign({}, requiredProps, {
          status: StatusDropdown.STATUS.POSITIVE,
        });
        const testCase = TestCaseFactory.create(StatusDropdown, props);
        const label = testCase.first('.statusDropdownLabel');
        expect(label.className).toContain('statusDropdownLabel--positive');
      });
    });
  });
});
