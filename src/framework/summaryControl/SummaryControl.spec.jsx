
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import SummaryControl from './SummaryControl.jsx';

describe('SummaryControl', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: <div id="test">test</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(SummaryControl, props);
        expect(testCase.first('#test').textContent).toBe('test');
      });
    });

    describe('icon', () => {
      it('is rendered', () => {
        const props = {
          icon: <div id="icon">icon</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(SummaryControl, props);
        expect(testCase.first('#icon').textContent).toBe('icon');
      });
    });
  });
});
