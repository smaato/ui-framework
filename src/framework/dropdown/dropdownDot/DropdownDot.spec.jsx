
import { TestCaseFactory } from 'react-test-kit';
import DropdownDot from './DropdownDot.jsx';

describe('DropdownDot', () => {
  describe('Props', () => {
    describe('color', () => {
      it('BLUE applies the appropriate class', () => {
        const props = {
          color: DropdownDot.COLOR.BLUE,
        };
        const testCase = TestCaseFactory.create(DropdownDot, props);
        expect(testCase.dom.className).toContain('dropdownDot--blue');
      });

      it('GREEN applies the appropriate class', () => {
        const props = {
          color: DropdownDot.COLOR.GREEN,
        };
        const testCase = TestCaseFactory.create(DropdownDot, props);
        expect(testCase.dom.className).toContain('dropdownDot--green');
      });

      it('GREY applies the appropriate class', () => {
        const props = {
          color: DropdownDot.COLOR.GREY,
        };
        const testCase = TestCaseFactory.create(DropdownDot, props);
        expect(testCase.dom.className).toContain('dropdownDot--grey');
      });

      it('RED applies the appropriate class', () => {
        const props = {
          color: DropdownDot.COLOR.RED,
        };
        const testCase = TestCaseFactory.create(DropdownDot, props);
        expect(testCase.dom.className).toContain('dropdownDot--red');
      });
    });
  });
});
