
import { TestCaseFactory } from 'react-test-kit';
import Label from './Label.jsx';

describe('Label', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is set as the label\'s text', () => {
        const props = {
          children: 'Label text',
        };
        const testCase = TestCaseFactory.create(Label, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('htmlFor', () => {
      it('sets the value as the label\'s "for" attribute', () => {
        const props = {
          children: '',
          htmlFor: 'test',
        };
        const testCase = TestCaseFactory.create(Label, props);
        expect(testCase.dom.getAttribute('for')).toBe(props.htmlFor);
      });

      it('applies the appropriate class', () => {
        const props = {
          children: '',
          htmlFor: 'test',
        };
        const testCase = TestCaseFactory.create(Label, props);
        expect(testCase.dom.className).toContain('label--clickable');
      });
    });

    describe('isAlignedWithField', () => {
      it('applies the appropriate class', () => {
        const props = {
          children: '',
          isAlignedWithField: true,
        };
        const testCase = TestCaseFactory.create(Label, props);
        expect(testCase.dom.className).toContain('label--alignedWthField');
      });
    });

    describe('isAlignedWithLabeledField', () => {
      it('applies the appropriate class', () => {
        const props = {
          children: '',
          isAlignedWithLabeledField: true,
        };
        const testCase = TestCaseFactory.create(Label, props);
        expect(testCase.dom.className)
          .toContain('label--alignedWithLabeledField');
      });
    });
  });
});
