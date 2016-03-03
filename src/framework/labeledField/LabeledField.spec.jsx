
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import LabeledField from './LabeledField.jsx';

describe('LabeledField', () => {
  describe('Props', () => {
    describe('children', () => {
      it('are rendered', () => {
        const props = {
          label: 'Test',
          children: <div id="test" />,
        };

        const testCase =
          TestCaseFactory.createFromFunction(LabeledField, props);
        expect(testCase.first('#test')).toBeDefined();
      });
    });

    describe('label', () => {
      it('becomes the textContent of the label element', () => {
        const props = {
          label: 'Test',
        };

        const testCase =
          TestCaseFactory.createFromFunction(LabeledField, props);
        expect(testCase.first('label').textContent).toBe(props.label);
      });
    });
  });
});
