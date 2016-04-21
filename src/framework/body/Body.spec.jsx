
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import Body from './Body.jsx';

describe('Body', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: <div id="test">test</div>,
        };
        const testCase = TestCaseFactory.create(Body, props);
        expect(testCase.first('#test').textContent).toBe('test');
      });
    });

    describe('isDark', () => {
      it('applies the appropriate class', () => {
        const props = {
          children: '',
          isDark: true,
        };
        const testCase = TestCaseFactory.create(Body, props);
        expect(testCase.dom.className).toContain('body--dark');
      });
    });
  });
});
