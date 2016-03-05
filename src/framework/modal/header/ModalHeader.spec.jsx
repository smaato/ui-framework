
import React from 'react';
import { TestCaseFactory } from 'react-test-kit';
import { CommonAssertions } from '../../services';
import ModalHeader from './ModalHeader.jsx';

describe('ModalHeader', () => {
  describe('Props', () => {
    CommonAssertions.assertDataId(ModalHeader, {
      title: 'title',
    }, '.modalHeader__title');

    describe('title', () => {
      it('is rendered', () => {
        const props = {
          title: 'Modal test title',
        };
        const testCase = TestCaseFactory.create(ModalHeader, props);
        expect(
          testCase.first('.modalHeader__title').textContent
        ).toBe(props.title);
      });
    });

    describe('onClose', () => {
      it('renders a close button when present', () => {
        const props = {
          onClose: () => {},
        };
        const testCase = TestCaseFactory.create(ModalHeader, props);
        // We can't use firstComponent because ModalCloseButton isn't a class.
        expect(testCase.first('.modalHeader__closeButton')).toBeDefined();
      });

      it('doesn\'t render a close button when not present', () => {
        const props = {
          onClose: undefined,
        };
        const testCase = TestCaseFactory.create(ModalHeader, props);
        // We can't use firstComponent because ModalCloseButton isn't a class.
        expect(testCase.first('.modalHeader__closeButton')).not.toBeDefined();
      });
    });

    describe('icon', () => {
      it('is rendered when there is a title', () => {
        const props = {
          icon: <div id="icon" />,
          title: 'Modal test title',
        };
        const testCase = TestCaseFactory.create(ModalHeader, props);
        expect(testCase.first('#icon')).toBeDefined();
      });
    });

    describe('closeTopModalLabel', () => {
      it('is rendered', () => {
        const props = {
          closeTopModalLabel: 'Close top modal',
        };
        const testCase = TestCaseFactory.create(ModalHeader, props);
        expect(testCase.dom.textContent).toContain(props.closeTopModalLabel);
      });
    });
  });
});
