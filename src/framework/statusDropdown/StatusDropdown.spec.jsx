
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
    describe('selectedOption', () => {
      it('is moved to first position in options when defined', () => {
        const selectedOption = 3;
        const props = Object.assign({}, requiredProps, {
          options: [1, 2, selectedOption],
          selectedOption,
        });
        const testCase = TestCaseFactory.create(StatusDropdown, props);
        const baseDropdown = testCase.findComponents(BaseDropdown)[0];

        expect(baseDropdown.props.options.indexOf(selectedOption)).toBe(0);
      });

      it('isn\'t moved inside options when undefined', () => {
        const selectedOption = 3;
        const props = Object.assign({}, requiredProps, {
          options: [1, 2, selectedOption],
        });
        const testCase = TestCaseFactory.create(StatusDropdown, props);
        const baseDropdown = testCase.findComponents(BaseDropdown)[0];

        expect(baseDropdown.props.options.indexOf(selectedOption)).toBe(2);
      });
    });

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
