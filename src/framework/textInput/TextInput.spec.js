
import { TestCaseFactory } from 'react-test-kit';
import TextInput from './TextInput.jsx';

describe('TextInput', () => {
  describe('DOM structure', () => {
    it('is an input element with a textInput class', () => {
      const testCase = TestCaseFactory.createFromFunction(TextInput);
      expect(testCase.dom.tagName).toBe('INPUT');
      expect(testCase.dom.getAttribute('class')).toBe('textInput');
    });
  });
});
