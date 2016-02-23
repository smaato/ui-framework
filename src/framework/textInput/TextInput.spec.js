
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

    describe('isFullWidth', () => {
      it('when true, adds the appropriate class to the input element', () => {
        const props = {
          isFullWidth: true,
        };

        const testCase = TestCaseFactory.createFromFunction(TextInput, props);
        expect(testCase.dom.getAttribute('class')
          .indexOf('textInput--fullWidth') !== -1).toBe(true);
      });

      it(
        'when false, doesn\'t add the appropriate class to the input element',
        () => {
          const props = {
            isFullWidth: false,
          };

          const testCase = TestCaseFactory.createFromFunction(TextInput, props);
          expect(testCase.dom.getAttribute('class')
            .indexOf('textInput--fullWidth') === -1).toBe(true);
        }
      );
    });
  });
});
