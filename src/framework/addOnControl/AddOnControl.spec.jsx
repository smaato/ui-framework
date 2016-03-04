
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import AddOnControl from './AddOnControl.jsx';

describe('AddOnControl', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: <div id="test">test</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(
          AddOnControl,
          props
        );
        expect(testCase.first('#test').textContent).toBe('test');
      });
    });
  });
});
