
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import ModalConfirmationFooter from './ModalConfirmationFooter.jsx';

describe('ModalConfirmationFooter', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered when an array', () => {
        const props = {
          children: [
            <div key="1">item1</div>,
            <div key="2">item2</div>,
          ],
        };
        const testCase =
          TestCaseFactory.createFromFunction(ModalConfirmationFooter, props);
        expect(testCase.dom.childNodes[0].textContent).toBe('item1');
        expect(testCase.dom.childNodes[1].textContent).toBe('item2');
      });

      it('is rendered when a single element', () => {
        const props = {
          children: <div>item1</div>,
        };
        const testCase =
          TestCaseFactory.createFromFunction(ModalConfirmationFooter, props);
        expect(testCase.dom.childNodes[0].textContent).toBe('item1');
      });
    });
  });
});
