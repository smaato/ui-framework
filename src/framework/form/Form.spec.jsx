
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../services';
import Form from './Form.jsx';

describe('Form', () => {
  describe('DOM structure', () => {
    it('is a form', () => {
      const testCase = TestCaseFactory.create(Form);
      expect(testCase.dom.tagName).toBe('FORM');
    });
  });

  describe('Props', () => {
    CommonAssertions.assertDataId(Form);

    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'Test',
        };
        const testCase = TestCaseFactory.create(Form, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('onSubmit', () => {
      it('renders a submit input when it\'s defined', () => {
        const props = {
          onSubmit: () => undefined,
        };
        const testCase = TestCaseFactory.create(Form, props);
        const submitInput = testCase.first('input[type=submit]');
        expect(submitInput).toBeDefined();
      });

      it('doesn\'t render a submit input when it\'s not defined', () => {
        const testCase = TestCaseFactory.create(Form);
        const submitInput = testCase.first('input[type=submit]');
        expect(submitInput).not.toBeDefined();
      });

      it('is called when the form is submitted', () => {
        const props = {
          onSubmit: jasmine.createSpy('onSubmit'),
        };
        const testCase = TestCaseFactory.create(Form, props);
        testCase.trigger('submit');
        expect(props.onSubmit).toHaveBeenCalled();
      });
    });
  });
});
