
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../services';
import TextInput from './TextInput.jsx';

describe('TextInput', () => {
  describe('DOM structure', () => {
    it('is an input element with a textInput class', () => {
      const testCase = TestCaseFactory.createFromFunction(TextInput);
      expect(testCase.dom.tagName).toBe('INPUT');
      expect(testCase.dom.getAttribute('class')).toBe('textInput');
    });
  });

  describe('Props', () => {
    CommonAssertions.assertDataId(TextInput);

    describe('isError', () => {
      it('when true, adds the appropriate class to the input element', () => {
        const props = {
          isError: true,
        };

        const testCase = TestCaseFactory.createFromFunction(TextInput, props);
        expect(testCase.dom.getAttribute('class'))
          .toContain('is-text-input-error');
      });

      it(
        'when false, doesn\'t add the appropriate class to the input element',
        () => {
          const props = {
            isError: false,
          };

          const testCase = TestCaseFactory.createFromFunction(TextInput, props);
          expect(testCase.dom.getAttribute('class'))
            .not.toContain('is-text-input-error');
        }
      );
    });

    describe('isFullWidth', () => {
      it('when true, adds the appropriate class to the input element', () => {
        const props = {
          isFullWidth: true,
        };

        const testCase = TestCaseFactory.createFromFunction(TextInput, props);
        expect(testCase.dom.getAttribute('class'))
          .toContain('textInput--fullWidth');
      });

      it(
        'when false, doesn\'t add the appropriate class to the input element',
        () => {
          const props = {
            isFullWidth: false,
          };

          const testCase = TestCaseFactory.createFromFunction(TextInput, props);
          expect(testCase.dom.getAttribute('class'))
            .not.toContain('textInput--fullWidth');
        }
      );
    });

    describe('readOnly', () => {
      it('when input is readONly then readOnly attribute is applied', () => {
        const props = {
          readOnly: true,
        };

        const testCase = TestCaseFactory.createFromFunction(TextInput, props);
        expect(testCase.dom.getAttribute('readOnly')).toBeDefined();
      });
    });
  });
});
