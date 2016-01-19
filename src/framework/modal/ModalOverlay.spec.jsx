
import React from 'react';
import ReactDOM from 'react-dom';
import { TestCaseFactory } from 'react-test-kit';
import ModalOverlay from './ModalOverlay.jsx';

describe('ModalOverlay', () => {
  let testCase;

  afterEach(() => {
    // Forces component unmounting or else component from previous tests is
    // still is mounted in detached node
    if (testCase.dom.parentNode) {
      ReactDOM.unmountComponentAtNode(testCase.dom.parentNode);
    }
  });

  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          isOpen: true,
          children: <div id="item">item</div>,
        };
        // ModalOverlay needs to be wrapped in a div to able to unmount it.
        // The problem is Portal component inside ModalOverlay deletes the
        // testCase.dom, which makes testCase.dom.parentNode unaccessible,
        // which in turn makes unmounting impossible.
        testCase = TestCaseFactory.createFromElement(<div><ModalOverlay {...props} /></div>);
        expect(document.getElementById('item').textContent).toBe('item');
      });
    });

    describe('"is-modal-overlay-open" class', () => {
      it('is added when mounted with isOpen true', () => {
        const props = {
          isOpen: true,
        };
        testCase = TestCaseFactory.createFromElement(<div><ModalOverlay {...props} /></div>);
        expect(document.body.getAttribute('class'))
          .toContain('is-modal-overlay-open');
      });

      it('is not added when mounted with isOpen false', () => {
        const props = {
          isOpen: false,
        };
        testCase = TestCaseFactory.createFromElement(<div><ModalOverlay {...props} /></div>);
        expect(document.body.getAttribute('class'))
          .not.toContain('is-modal-overlay-open');
      });

      it('is added after mounted with isOpen false and updated to true', () => {
        testCase = TestCaseFactory.createFromElement(
          <div>
            <ModalOverlay isOpen={false} />
          </div>
        );
        expect(document.body.getAttribute('class'))
          .not.toContain('is-modal-overlay-open');
        // Re-rendering the same component with different props into the
        // same node will perform an update.
        // http://facebook.github.io/react/docs/top-level-api.html#reactdom.render
        ReactDOM.render(
          <div>
            <ModalOverlay isOpen />
          </div>,
          testCase.dom.parentNode
        );
        expect(document.body.getAttribute('class'))
          .toContain('is-modal-overlay-open');
      });

      it('is removed after mounted with isOpen true and updated to false', () => {
        testCase = TestCaseFactory.createFromElement(
          <div>
            <ModalOverlay isOpen />
          </div>
        );
        expect(document.body.getAttribute('class'))
          .toContain('is-modal-overlay-open');
        ReactDOM.render(
          <div>
            <ModalOverlay isOpen={false} />
          </div>,
          testCase.dom.parentNode
        );
        expect(document.body.getAttribute('class'))
          .not.toContain('is-modal-overlay-open');
      });

      it('is removed when unmounted', () => {
        const props = {
          isOpen: true,
        };
        testCase = TestCaseFactory.createFromElement(<div><ModalOverlay {...props} /></div>);
        ReactDOM.unmountComponentAtNode(testCase.dom.parentNode);
        expect(document.body.getAttribute('class'))
          .not.toContain('is-modal-overlay-open');
      });
    });
  });
});
