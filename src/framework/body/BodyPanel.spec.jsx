
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
        const testCase = TestCaseFactory.create(BodyPanel, props);
        expect(testCase.first('#test').textContent).toBe('test');
      });
    });

    describe('isTopFlush', () => {
      it('applies the appropriate class', () => {
        const props = {
          isTopFlush: true,
        };
        const testCase = TestCaseFactory.create(BodyPanel, props);
        expect(testCase.dom.className).toContain('bodyPanel--topFlush');
      });
    });
  });
});
