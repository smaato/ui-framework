
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../services';
import TextArea from './TextArea.jsx';

describe('TextArea', () => {
  describe('DOM structure', () => {
    it('is a textarea element with a textArea class', () => {
      const testCase = TestCaseFactory.create(TextArea);
      expect(testCase.dom.tagName).toBe('TEXTAREA');
      expect(testCase.dom.getAttribute('class')).toBe('textArea');
    });
  });

  describe('Props', () => {
    CommonAssertions.assertDataId(TextArea);

    describe('isError', () => {
      it('when true, adds the appropriate class to the input element', () => {
        const props = {
          isError: true,
        };

        const testCase = TestCaseFactory.create(TextArea, props);
        expect(testCase.dom.getAttribute('class'))
          .toContain('is-text-box-error');
      });

      it(
        'when false, doesn\'t add the appropriate class to the input element',
        () => {
          const props = {
            isError: false,
          };

          const testCase = TestCaseFactory.create(TextArea, props);
          expect(testCase.dom.getAttribute('class'))
            .not.toContain('is-text-box-error');
        }
      );
    });

    describe('isFullWidth', () => {
      it('when true, adds the appropriate class to the input element', () => {
        const props = {
          isFullWidth: true,
        };

        const testCase = TestCaseFactory.create(TextArea, props);
        expect(testCase.dom.getAttribute('class'))
          .toContain('textArea--fullWidth');
      });

      it(
        'when false, doesn\'t add the appropriate class to the input element',
        () => {
          const props = {
            isFullWidth: false,
          };

          const testCase = TestCaseFactory.create(TextArea, props);
          expect(testCase.dom.getAttribute('class'))
            .not.toContain('textArea--fullWidth');
        }
      );
    });

    describe('isResizable', () => {
      it('when true, adds the appropriate class to the input element', () => {
        const props = {
          isResizable: true,
        };

        const testCase = TestCaseFactory.create(TextArea, props);
        expect(testCase.dom.getAttribute('class'))
          .toContain('textArea--resizable');
      });

      it(
        'when false, doesn\'t add the appropriate class to the input element',
        () => {
          const props = {
            isResizable: false,
          };

          const testCase = TestCaseFactory.create(TextArea, props);
          expect(testCase.dom.getAttribute('class'))
            .not.toContain('textArea--resizable');
        }
      );
    });
  });
});
