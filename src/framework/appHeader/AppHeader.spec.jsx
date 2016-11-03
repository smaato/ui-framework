
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import AppHeader from './AppHeader.jsx';

describe('AppHeader', () => {
  describe('Props', () => {
    describe('left', () => {
      it('is rendered as the first child', () => {
        const props = {
          left: <div className="testChild">left</div>,
          center: <div className="testChild">center</div>,
          right: <div className="testChild">right</div>,
        };

        const testCase = TestCaseFactory.create(AppHeader, props);
        expect(testCase.find('.testChild')[0].textContent).toBe('left');
      });
    });

    describe('center', () => {
      it('is rendered as the second child', () => {
        const props = {
          left: <div className="testChild">left</div>,
          center: <div className="testChild">center</div>,
          right: <div className="testChild">right</div>,
        };

        const testCase = TestCaseFactory.create(AppHeader, props);
        expect(testCase.find('.testChild')[1].textContent).toBe('center');
      });
    });

    describe('right', () => {
      it('is rendered as the last child', () => {
        const props = {
          left: <div className="testChild">left</div>,
          center: <div className="testChild">center</div>,
          right: <div className="testChild">right</div>,
        };

        const testCase = TestCaseFactory.create(AppHeader, props);
        expect(testCase.find('.testChild')[2].textContent).toBe('right');
      });
    });
  });
});
