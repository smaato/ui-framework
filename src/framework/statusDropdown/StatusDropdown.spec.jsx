
import { TestCaseFactory } from 'react-test-kit';
import StatusDropdown from './StatusDropdown.jsx';
import BaseDropdown from '../base/dropdown/BaseDropdown.jsx';

describe('StatusDropdown', () => {
  describe('DOM structure', () => {
    it('renders BaseDropdown', () => {
      const props = {
        onSelect: () => undefined,
      };
      const testCase = TestCaseFactory.create(StatusDropdown, props);
      expect(testCase.findComponents(BaseDropdown)).toBeDefined();
    });
  });

  describe('Props', () => {
    describe('onSelect', () => {
      it('is passed to BaseDropdown', () => {
        const onSelect = () => undefined;
        const props = {
          onSelect,
        };
        const testCase = TestCaseFactory.create(StatusDropdown, props);
        const baseDropdown = testCase.findComponents(BaseDropdown)[0];

        expect(baseDropdown.props.onSelect).toBe(onSelect);
      });
    });

    describe('options', () => {
      it('is passed to BaseDropdown', () => {
        const options = [
          StatusDropdown.OPTIONS.ACTIVATE,
          StatusDropdown.OPTIONS.DEACTIVATE,
          StatusDropdown.OPTIONS.DELETE,
        ];
        const props = {
          onSelect: () => undefined,
          options,
        };
        const testCase = TestCaseFactory.create(StatusDropdown, props);
        const baseDropdown = testCase.findComponents(BaseDropdown)[0];

        expect(baseDropdown.props.options).toBe(options);
      });
    });

    describe('selectedOption', () => {
      it('is moved to first position in options when defined', () => {
        const selectedOption = StatusDropdown.OPTIONS.DELETE;
        const props = {
          onSelect: () => undefined,
          options: [
            StatusDropdown.OPTIONS.ACTIVATE,
            StatusDropdown.OPTIONS.DEACTIVATE,
            selectedOption,
          ],
          selectedOption,
        };
        const testCase = TestCaseFactory.create(StatusDropdown, props);
        const baseDropdown = testCase.findComponents(BaseDropdown)[0];

        expect(baseDropdown.props.options.indexOf(selectedOption)).toBe(0);
      });

      it('isn\'t moved inside options when undefined', () => {
        const selectedOption = StatusDropdown.OPTIONS.DELETE;
        const props = {
          onSelect: () => undefined,
          options: [
            StatusDropdown.OPTIONS.ACTIVATE,
            StatusDropdown.OPTIONS.DEACTIVATE,
            selectedOption,
          ],
        };
        const testCase = TestCaseFactory.create(StatusDropdown, props);
        const baseDropdown = testCase.findComponents(BaseDropdown)[0];

        expect(baseDropdown.props.options.indexOf(selectedOption)).toBe(2);
      });
    });
  });

  describe('Option mapping', () => {
    const options = [
      StatusDropdown.OPTIONS.ACTIVATE,
      StatusDropdown.OPTIONS.DEACTIVATE,
      StatusDropdown.OPTIONS.DELETE,
    ];

    it('ACTIVATE renders a green DropdownDot and green label', () => {
      const props = {
        onSelect: () => undefined,
        options,
        selectedOption: StatusDropdown.OPTIONS.ACTIVATE,
      };
      const testCase = TestCaseFactory.create(StatusDropdown, props);
      expect(testCase.first('.dropdownDot--green')).toBeDefined();
      expect(testCase.first('.statusDropdownLabel--green')).toBeDefined();
    });

    it('DEACTIVATE renders a red DropdownDot and red label', () => {
      const props = {
        onSelect: () => undefined,
        options,
        selectedOption: StatusDropdown.OPTIONS.DEACTIVATE,
      };
      const testCase = TestCaseFactory.create(StatusDropdown, props);
      expect(testCase.first('.dropdownDot--red')).toBeDefined();
      expect(testCase.first('.statusDropdownLabel--red')).toBeDefined();
    });
  });
});
