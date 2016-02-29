
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import FormFooter from './FormFooter.jsx';

describe('FormFooter', () => {
  describe('Props', () => {
    describe('right', () => {
      it('is rendered when an array', () => {
        const props = {
          right: [
            <div className="right" key="1">item1</div>,
            <div className="right" key="2">item2</div>,
          ],
        };
        const testCase = TestCaseFactory.createFromFunction(FormFooter, props);
        const right = testCase.find('.right');
        expect(right[0].textContent).toBe('item1');
        expect(right[1].textContent).toBe('item2');
      });

      it('is rendered when a single element', () => {
        const props = {
          right: [<div className="right" key="1">item1</div>],
        };
        const testCase = TestCaseFactory.createFromFunction(FormFooter, props);
        const right = testCase.find('.right');
        expect(right[0].textContent).toBe('item1');
      });
    });

    describe('left', () => {
      it('is rendered when an array', () => {
        const props = {
          left: [
            <div className="left" key="1">item1</div>,
            <div className="left" key="2">item2</div>,
          ],
          right: [<div key="3"></div>],
        };
        const testCase = TestCaseFactory.createFromFunction(FormFooter, props);
        const left = testCase.find('.left');
        expect(left[0].textContent).toBe('item1');
        expect(left[1].textContent).toBe('item2');
      });

      it('is rendered when a single element', () => {
        const props = {
          left: [<div className="left" key="1">item1</div>],
          right: [<div key="2"></div>],
        };
        const testCase = TestCaseFactory.createFromFunction(FormFooter, props);
        const left = testCase.find('.left');
        expect(left[0].textContent).toBe('item1');
      });
    });
  });
});
