
import { TestCaseFactory } from 'react-test-kit';

import BaseDropdown from '../base/dropdown/BaseDropdown.jsx';
import Dropdown from './Dropdown.jsx';
import DropdownDot from './dropdownDot/DropdownDot.jsx';

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

  describe('props', () => {
    describe('dotColor', () => {
      it('renders a DropdownDot', () => {
        const props = Object.assign({}, requiredProps, {
          dotColor: 'dotColor',
        });
        const testCase = TestCaseFactory.create(Dropdown, props);
        expect(testCase.first('.dropdownDot')).toBeDefined();
      });

      it('DropdownDot.COLOR.BLUE applies the appropriate class', () => {
        const props = Object.assign({}, requiredProps, {
          dotColor: DropdownDot.COLOR.BLUE,
        });
        const testCase = TestCaseFactory.create(Dropdown, props);
        expect(testCase.first('.dropdownLabel--blue')).toBeDefined();
      });

      it('DropdownDot.COLOR.GREEN applies the appropriate class', () => {
        const props = Object.assign({}, requiredProps, {
          dotColor: DropdownDot.COLOR.GREEN,
        });
        const testCase = TestCaseFactory.create(Dropdown, props);
        expect(testCase.first('.dropdownLabel--green')).toBeDefined();
      });

      it('DropdownDot.COLOR.GREY applies the appropriate class', () => {
        const props = Object.assign({}, requiredProps, {
          dotColor: DropdownDot.COLOR.GREY,
        });
        const testCase = TestCaseFactory.create(Dropdown, props);
        expect(testCase.first('.dropdownLabel--grey')).toBeDefined();
      });

      it('DropdownDot.COLOR.RED applies the appropriate class', () => {
        const props = Object.assign({}, requiredProps, {
          dotColor: DropdownDot.COLOR.RED,
        });
        const testCase = TestCaseFactory.create(Dropdown, props);
        expect(testCase.first('.dropdownLabel--red')).toBeDefined();
      });
    });

    describe('isBorderless', () => {
      it('applies the appropriate class', () => {
        const props = Object.assign({}, requiredProps, {
          isBorderless: true,
        });
        const testCase = TestCaseFactory.create(Dropdown, props);
        expect(
          testCase.first('.dropdownLabel').className
        ).toContain('dropdownLabel--borderless');
      });
    });
  });
});
