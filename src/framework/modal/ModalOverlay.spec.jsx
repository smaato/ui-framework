
import React from 'react';
import ReactDOM from 'react-dom';
import { TestCaseFactory } from 'react-test-kit';
import ModalOverlay from './ModalOverlay.jsx';

describe('ModalOverlay', () => {
  let testCase;

  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: <div id="item">item</div>,
        };
        testCase = TestCaseFactory.createFromElement(<ModalOverlay {...props} />);
        expect(testCase.first('#item').textContent).toBe('item');
      });
    });
  });

  describe('\'s is-modal-overlay-open class', () => {
    it('is added on body when mounted', () => {
      // Forces component unmounting or else component from previous tests is
      // still is mounted in detached node by this point
      ReactDOM.unmountComponentAtNode(testCase.dom.parentNode);
      testCase = TestCaseFactory.createFromElement(<ModalOverlay/>);
      expect(document.body.getAttribute('class'))
        .toContain('is-modal-overlay-open');
    });

    it('is removed from body when unmounted', () => {
      testCase = TestCaseFactory.createFromElement(<ModalOverlay/>);
      ReactDOM.unmountComponentAtNode(testCase.dom.parentNode);
      expect(document.body.getAttribute('class'))
        .not.toContain('is-modal-overlay-open');
    });
  });
});
