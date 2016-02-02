
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import ModalFooter from './ModalFooter.jsx';

describe('ModalFooter', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered when an array', () => {
        const props = {
          children: [
            <div className="children" key="1">item1</div>,
            <div className="children" key="2">item2</div>,
          ],
        };
        const testCase = TestCaseFactory.createFromFunction(ModalFooter, props);
        const children = testCase.find('.children');
        expect(children[0].textContent).toBe('item1');
        expect(children[1].textContent).toBe('item2');
      });

      it('is rendered when a single element', () => {
        const props = {
          children: <div className="children">item1</div>,
        };
        const testCase = TestCaseFactory.createFromFunction(ModalFooter, props);
        const children = testCase.find('.children');
        expect(children[0].textContent).toBe('item1');
      });
    });

    describe('left', () => {
      it('is rendered when an array', () => {
        const props = {
          left: [
            <div className="left" key="1">item1</div>,
            <div className="left" key="2">item2</div>,
          ],
          children: <div></div>,
        };
        const testCase = TestCaseFactory.createFromFunction(ModalFooter, props);
        const left = testCase.find('.left');
        expect(left[0].textContent).toBe('item1');
        expect(left[1].textContent).toBe('item2');
      });

      it('is rendered when a single element', () => {
        const props = {
          left: <div className="left">item1</div>,
          children: <div></div>,
        };
        const testCase = TestCaseFactory.createFromFunction(ModalFooter, props);
        const left = testCase.find('.left');
        expect(left[0].textContent).toBe('item1');
      });
    });
  });
});
