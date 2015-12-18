
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import BodyPanel from './BodyPanel.jsx';

describe('BodyPanel', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: <div id="test">test</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(BodyPanel, props);
        expect(testCase.first('#test').textContent).toBe('test');
      });
    });
  });
});
