
import React from 'react';
import ReactDOM from 'react-dom';
import { TestCaseFactory } from 'react-test-kit';
import ModalOverlay from './ModalOverlay.jsx';

describe('ModalOverlay', () => {
  afterEach(() => {
    // Clean up by manually resetting the body classes.
    document.body.className = '';
  });

  describe('Props', () => {
    describe('children', () => {
      it('is rendered', () => {
        const props = {
          isOpen: true,
          children: <div id="item">item</div>,
        };
        const testCase = TestCaseFactory.createFromElement(<ModalOverlay {...props} />);
        expect(testCase.first('#item').textContent).toBe('item');
      });
    });

    describe('isOpen', () => {
      it('adds is-modal-overlay-open class to body when true', () => {
        const props = {
          isOpen: true,
          children: <div />,
        };
        const testCase = TestCaseFactory.createFromElement(<ModalOverlay {...props} />); // eslint-disable-line no-unused-vars
        expect(document.body.getAttribute('class'))
          .toContain('is-modal-overlay-open');
      });

      it('doesn\'t add class to body when false', () => {
        const props = {
          isOpen: false,
          children: <div />,
        };
        const testCase = TestCaseFactory.createFromElement(<ModalOverlay {...props} />); // eslint-disable-line no-unused-vars
        expect(document.body.getAttribute('class'))
          .not.toContain('is-modal-overlay-open');
      });

      it('adds class to body when changed to true', () => {
        const props = {
          isOpen: false,
          children: <div />,
        };

        const testCase = TestCaseFactory.createFromElement(
          <div>
            <ModalOverlay {...props} />
          </div>
        );

        // Open the modalOverlay.
        props.isOpen = true;

        ReactDOM.render(
          <div>
            <ModalOverlay {...props} />
          </div>,
          testCase.dom.parentNode
        );

        expect(document.body.getAttribute('class'))
          .toContain('is-modal-overlay-open');
      });

      it('removes class from body when changed to false', () => {
        const props = {
          isOpen: true,
          children: <div />,
        };

        const testCase = TestCaseFactory.createFromElement(
          <div>
            <ModalOverlay {...props} />
          </div>
        );

        // Close the modalOverlay.
        props.isOpen = false;

        // Re-rendering the same component with different props into the
        // same node will perform an update.
        // http://facebook.github.io/react/docs/top-level-api.html#reactdom.render
        // The problem is Portal component inside ModalOverlay deletes the
        // testCase.dom, which makes testCase.dom.parentNode unaccessible,
        // so we need to wrap it in a div.
        ReactDOM.render(
          <div>
            <ModalOverlay {...props} />
          </div>,
          testCase.dom.parentNode
        );

        expect(document.body.getAttribute('class'))
          .not.toContain('is-modal-overlay-open');
      });
    });

    describe('Behavior', () => {
      it('is-modal-overlay-open class is removed from body when unmounted', () => {
        const props = {
          isOpen: true,
          children: <div />,
        };

        const testCase = TestCaseFactory.createFromElement(
          <div>
            <ModalOverlay {...props} />
          </div>
        );

        ReactDOM.unmountComponentAtNode(testCase.dom.parentNode);
        expect(document.body.getAttribute('class'))
          .not.toContain('is-modal-overlay-open');
      });
    });
  });
});
