
import { TestCaseFactory } from 'react-test-kit';
import StatusDropdown from './StatusDropdown.jsx';
import BaseDropdown from '../base/dropdown/BaseDropdown.jsx';

describe('StatusDropdown', () => {
  const options = [
    StatusDropdown.OPTIONS.ACTIVATE,
    StatusDropdown.OPTIONS.ARCHIVE,
    StatusDropdown.OPTIONS.DEACTIVATE,
    StatusDropdown.OPTIONS.DISABLED,
    StatusDropdown.OPTIONS.PUBLISHED,
    StatusDropdown.OPTIONS.UNPUBLISHED,
  ];
  const defaultProps = {
    onSelect: () => undefined,
    options,
  };

  describe('DOM structure', () => {
    it('renders BaseDropdown', () => {
      const testCase = TestCaseFactory.create(StatusDropdown, defaultProps);

      expect(testCase.findComponents(BaseDropdown)).toBeDefined();
    });

    it('renders StatusDropdownOptionIcon when iconType is provided', () => {
      const props = Object.assign({}, defaultProps, {
        selectedOption: StatusDropdown.OPTIONS.ACTIVATE,
      });

      const testCase = TestCaseFactory.create(StatusDropdown, props);

      const statusDropdownLabel = testCase.find('.statusDropdownLabel')[0];
      testCase.trigger('click', statusDropdownLabel);

      expect(testCase.first('.statusDropdownOptionIcon')).toBeDefined();
    });
  });

  describe('Props', () => {
    describe('onSelect', () => {
      it('is passed to BaseDropdown', () => {
        const testCase = TestCaseFactory.create(StatusDropdown, defaultProps);

        const baseDropdown = testCase.findComponents(BaseDropdown)[0];
        expect(baseDropdown.props.onSelect).toBe(defaultProps.onSelect);
      });
    });

    describe('options', () => {
      it('is passed to BaseDropdown', () => {
        const testCase = TestCaseFactory.create(StatusDropdown, defaultProps);

        const baseDropdown = testCase.findComponents(BaseDropdown)[0];
        expect(baseDropdown.props.options).toBe(defaultProps.options);
      });
    });

    describe('selectedOption', () => {
      it('is moved to first position in options when defined', () => {
        const props = Object.assign({}, defaultProps, {
          selectedOption: defaultProps.options[2],
        });

        const testCase = TestCaseFactory.create(StatusDropdown, props);

        const baseDropdown = testCase.findComponents(BaseDropdown)[0];
        expect(
          baseDropdown.props.options.indexOf(props.selectedOption)
        ).toBe(0);
      });

      it('when ACTIVATE renders a green DropdownDot and green label', () => {
        const props = Object.assign({}, defaultProps, {
          selectedOption: StatusDropdown.OPTIONS.ACTIVATE,
        });

        const testCase = TestCaseFactory.create(StatusDropdown, props);

        expect(testCase.first('.dropdownDot--green')).toBeDefined();
        expect(testCase.first('.statusDropdownLabel--green')).toBeDefined();
      });

      it('when ARCHIVE renders a grey DropdownDot and grey label', () => {
        const props = Object.assign({}, defaultProps, {
          selectedOption: StatusDropdown.OPTIONS.ARCHIVE,
        });

        const testCase = TestCaseFactory.create(StatusDropdown, props);

        expect(testCase.first('.dropdownDot--grey')).toBeDefined();
        expect(testCase.first('.statusDropdownLabel--grey')).toBeDefined();
      });

      it('when DEACTIVATE renders a red DropdownDot and red label', () => {
        const props = Object.assign({}, defaultProps, {
          selectedOption: StatusDropdown.OPTIONS.DEACTIVATE,
        });

        const testCase = TestCaseFactory.create(StatusDropdown, props);

        expect(testCase.first('.dropdownDot--red')).toBeDefined();
        expect(testCase.first('.statusDropdownLabel--red')).toBeDefined();
      });

      it('when DISABLED renders a grey DropdownDot and grey label', () => {
        const props = Object.assign({}, defaultProps, {
          selectedOption: StatusDropdown.OPTIONS.DISABLED,
        });

        const testCase = TestCaseFactory.create(StatusDropdown, props);

        expect(testCase.first('.dropdownDot--grey')).toBeDefined();
        expect(testCase.first('.statusDropdownLabel--grey')).toBeDefined();
      });

      it('when PUBLISHED renders a green DropdownDot and green label', () => {
        const props = Object.assign({}, defaultProps, {
          selectedOption: StatusDropdown.OPTIONS.PUBLISHED,
        });

        const testCase = TestCaseFactory.create(StatusDropdown, props);

        expect(testCase.first('.dropdownDot--green')).toBeDefined();
        expect(testCase.first('.statusDropdownLabel--green')).toBeDefined();
      });

      it('when UNPUBLISHED renders a grey DropdownDot and grey label', () => {
        const props = Object.assign({}, defaultProps, {
          selectedOption: StatusDropdown.OPTIONS.UNPUBLISHED,
        });

        const testCase = TestCaseFactory.create(StatusDropdown, props);

        expect(testCase.first('.dropdownDot--grey')).toBeDefined();
        expect(testCase.first('.statusDropdownLabel--grey')).toBeDefined();
      });
    });
  });
});
