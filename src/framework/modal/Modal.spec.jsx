
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import CommonAssertions from '../services/test/CommonAssertions';
import Modal from './Modal.jsx';

describe('Modal', () => {
  describe('Props', () => {
    CommonAssertions.assertDataId(Modal, {
      body: <div />,
    });

    describe('children', () => {
      it('is rendered', () => {
        const props = {
          children: 'test',
        };
        const testCase = TestCaseFactory.create(Modal, props);
        expect(testCase.dom.textContent).toBe(props.children);
      });
    });

    describe('onCloseTopModal', () => {
      it('is called when modal is clicked', () => {
        const props = {
          body: <div />,
          onCloseTopModal: jasmine.createSpy('onCloseTopModal'),
          index: 0,
          stackCount: 2,
        };
        const testCase = TestCaseFactory.create(Modal, props);
        testCase.trigger('click');
        expect(props.onCloseTopModal).toHaveBeenCalled();
      });
    });

    describe('width', () => {
      it('is applied as a style of the modal', () => {
        const props = {
          width: 33,
        };
        const testCase = TestCaseFactory.create(Modal, props);
        expect(testCase.dom.style.width).toBe(`${props.width}px`);
      });
    });
  });

  describe('Behavior', () => {
    describe('is-modal-next-in-stack class', () => {
      it('is applied when index is 2 less than stackCount', () => {
        const props = {
          body: <div />,
          onCloseTopModal: jasmine.createSpy('onCloseTopModal'),
          index: 0,
          stackCount: 2,
        };
        const testCase = TestCaseFactory.create(Modal, props);
        expect(testCase.dom.className)
          .toContain('is-modal-next-in-stack');
      });

      it('isn\'t applied when index is not 2 less than stackCount', () => {
        const props = {
          body: <div />,
          onCloseTopModal: jasmine.createSpy('onCloseTopModal'),
          index: 0,
          stackCount: 1,
        };
        const testCase = TestCaseFactory.create(Modal, props);
        expect(testCase.dom.className)
          .not.toContain('is-modal-next-in-stack');
      });
    });

    describe('is-modal-buried-in-stack class', () => {
      it('is applied when index is 3+ less than stackCount', () => {
        const props = {
          body: <div />,
          onCloseTopModal: jasmine.createSpy('onCloseTopModal'),
          index: 0,
          stackCount: 3,
        };
        const testCase = TestCaseFactory.create(Modal, props);
        expect(testCase.dom.className)
          .toContain('is-modal-buried-in-stack');
      });

      it('isn\'t applied when index is not 3+ less than stackCount', () => {
        const props = {
          body: <div />,
          onCloseTopModal: jasmine.createSpy('onCloseTopModal'),
          index: 0,
          stackCount: 2,
        };
        const testCase = TestCaseFactory.create(Modal, props);
        expect(testCase.dom.className)
          .not.toContain('is-modal-buried-in-stack');
      });
    });
  });
});
