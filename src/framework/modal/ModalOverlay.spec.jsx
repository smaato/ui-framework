
import React from 'react';
import ReactDOM from 'react-dom';
import { TestCaseFactory } from 'react-test-kit';
import ModalOverlay from './ModalOverlay.jsx';

describe('ModalOverlay', () => {
  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: <div id="item">item</div>,
          isOpen: false,
        };
        const testCase = TestCaseFactory.createFromElement(<ModalOverlay {...props} />);
        expect(testCase.first('#item').textContent).toBe('item');
      });
    });
  });

  describe('\'s is-modal-overlay-open class', () => {
    it('is added on body when mounted', () => {
      expect(document.body.getAttribute('class'))
        .toContain('is-modal-overlay-open');
    });

    it('is removed from body when unmounted', () => {
      ReactDOM.render(<ModalOverlay/>, document.body);
      ReactDOM.unmountComponentAtNode(document.body);
      expect(document.body.getAttribute('class'))
        .not.toContain('is-modal-overlay-open');
    });
  });
});
