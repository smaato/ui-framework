
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import ModalOverlay from './ModalOverlay.jsx';

describe('ModalOverlay', () => {
  describe('Props', () => {
    fdescribe('children', () => {
      it('is rendered', () => {
        const props = {
          children: <div id="item">item</div>,
          isOpen: false,
        };
        const testCase = TestCaseFactory.createFromElement(<ModalOverlay {...props} />);
        expect(testCase.first('#item').textContent).toBe('item');
      });
    });

    describe('isOpen', () => {
      it('when true, adds the appropriate class to the element', () => {
        const props = {
          isOpen: true,
        };
        const testCase = TestCaseFactory.createFromClass(ModalOverlay, props);
        expect(testCase.dom.getAttribute('class')
          .indexOf('is-modal-overlay-open') !== -1).toBe(true);
      });

      it('when false, doesn\'t add the appropriate class to the element', () => {
        const props = {
          isOpen: false,
        };
        const testCase = TestCaseFactory.createFromClass(ModalOverlay, props);
        expect(testCase.dom.getAttribute('class')
          .indexOf('is-modal-overlay-open') === -1).toBe(true);
      });
    });
  });
});
