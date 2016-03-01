
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import AddOnControl from './AddOnControl.jsx';

describe('AddOnControl', () => {
  describe('DOM structure', () => {
    it('renders left first', () => {
      const props = {
        left: <div className="child">left</div>,
        children: <div className="child">test</div>,
        right: <div className="child">right</div>,
      };
      const testCase = TestCaseFactory.createFromFunction(AddOnControl, props);
      const children = testCase.find('.child');
      expect(children[0].textContent).toBe('left');
    });

    it('renders children second', () => {
      const props = {
        left: <div className="child">left</div>,
        children: <div className="child">test</div>,
        right: <div className="child">right</div>,
      };
      const testCase = TestCaseFactory.createFromFunction(AddOnControl, props);
      const children = testCase.find('.child');
      expect(children[1].textContent).toBe('test');
    });

    it('renders right third', () => {
      const props = {
        left: <div className="child">left</div>,
        children: <div className="child">test</div>,
        right: <div className="child">right</div>,
      };
      const testCase = TestCaseFactory.createFromFunction(AddOnControl, props);
      const children = testCase.find('.child');
      expect(children[2].textContent).toBe('right');
    });
  });

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

    describe('left', () => {
      it('is rendered', () => {
        const props = {
          left: <div id="left">left</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(
          AddOnControl,
          props
        );
        expect(testCase.first('#left').textContent).toBe('left');
      });
    });

    describe('right', () => {
      it('is rendered', () => {
        const props = {
          right: <div id="right">right</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(
          AddOnControl,
          props
        );
        expect(testCase.first('#right').textContent).toBe('right');
      });
    });
  });
});
