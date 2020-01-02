
import { TestCaseFactory } from 'react-test-kit';
import CommonAssertions from '../services/test/CommonAssertions';
import TextInput from './TextInput.jsx';

describe('TextInput', () => {
  describe('DOM structure', () => {
    it('is an input element with a textInput class', () => {
      const testCase = TestCaseFactory.create(TextInput);
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

        const testCase = TestCaseFactory.create(TextInput, props);
        expect(testCase.dom.getAttribute('class'))
          .toContain('is-text-input-error');
      });

      it(
        'when false, doesn\'t add the appropriate class to the input element',
        () => {
          const props = {
            isError: false,
          };

          const testCase = TestCaseFactory.create(TextInput, props);
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

        const testCase = TestCaseFactory.create(TextInput, props);
        expect(testCase.dom.getAttribute('class'))
          .toContain('textInput--fullWidth');
      });

      it(
        'when false, doesn\'t add the appropriate class to the input element',
        () => {
          const props = {
            isFullWidth: false,
          };

          const testCase = TestCaseFactory.create(TextInput, props);
          expect(testCase.dom.getAttribute('class'))
            .not.toContain('textInput--fullWidth');
        }
      );
    });

    describe('isReadonly', () => {
      it('when true, disabled and readonly attributes are applied', () => {
        const props = {
          isReadonly: true,
        };

        const testCase = TestCaseFactory.create(TextInput, props);
        expect(testCase.dom.getAttribute('disabled')).toBeDefined();
        expect(testCase.dom.getAttribute('readonly')).toBeDefined();
      });

      it('when false, disabled and readonly attributes aren\'t applied', () => {
        const props = {
          isReadonly: false,
        };

        const testCase = TestCaseFactory.create(TextInput, props);
        expect(testCase.dom.getAttribute('disabled')).toBe(null);
        expect(testCase.dom.getAttribute('readonly')).toBe(null);
      });
    });
  });
});
