
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import AddOnSelect from './AddOnSelect.jsx';

describe('AddOnSelect', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: <option></option>,
        };
        const testCase =
          TestCaseFactory.createFromFunction(AddOnSelect, props);
        expect(testCase.first('option')).toBeDefined();
      });
    });
  });
});
