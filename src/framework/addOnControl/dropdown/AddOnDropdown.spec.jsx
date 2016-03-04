
import { TestCaseFactory } from 'react-test-kit';
import AddOnDropdown from './AddOnDropdown.jsx';
import BaseDropdown from '../../baseDropdown/BaseDropdown.jsx';

describe('AddOnDropdown', () => {
  let testCase;

  function label() {
    return testCase.first(`.${AddOnDropdown.defaultProps.labelClasses}`);
  }

  const requiredProps = {
    onSelect: () => undefined,
    labelProvider: () => undefined,
    optionLabelProvider: () => undefined,
  };

  describe('DOM structure', () => {
    it('is a BaseDropdown', () => {
      const props = Object.assign({}, requiredProps);
      testCase = TestCaseFactory.create(AddOnDropdown, props);
      expect(testCase.findComponents(BaseDropdown)).toBeDefined();
    });
  });

  describe('Props', () => {
    describe('isLeftSide', () => {
      it('adds the appropriate class to the label', () => {
        const props = Object.assign({}, requiredProps, {
          isLeftSide: true,
        });

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        expect(label().className).toContain('addOnDropdownLabel--left');
      });
    });

    describe('isRightSide', () => {
      it('adds the appropriate class to the label', () => {
        const props = Object.assign({}, requiredProps, {
          isRightSide: true,
        });

        testCase = TestCaseFactory.create(AddOnDropdown, props);
        expect(label().className).toContain('addOnDropdownLabel--right');
      });
    });
  });
});
