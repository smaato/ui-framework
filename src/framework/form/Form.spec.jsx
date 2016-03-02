
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../services';
import Form from './Form.jsx';

describe('Form', () => {
  describe('Props', () => {
    CommonAssertions.assertDataId(Form);

    describe('body', () => {
      it('is rendered', () => {
        const props = {
          body: <div id="body">body</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(Form, props);
        expect(testCase.first('#body').textContent).toBe('body');
      });
    });

    describe('footer', () => {
      it('is rendered', () => {
        const props = {
          body: <div id="body">body</div>,
          footer: <div id="footer">footer</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(Form, props);
        expect(testCase.first('#footer').textContent).toBe('footer');
      });
    });
  });
});
